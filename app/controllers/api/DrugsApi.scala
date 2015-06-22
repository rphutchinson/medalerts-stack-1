package controllers.api

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit

import controllers.XhrActionSupport
import play.api.Play.current
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{JsValue, Json}
import play.api.libs.ws._
import play.api.mvc._
import security.DemoDataHandler

import scala.concurrent.Future
import scalaoauth2.provider.OAuth2Provider

/**
 * Created by patrickhutchinson on 6/18/15.
 * API controller for Drug information
 */
object DrugsApi extends Controller with XhrActionSupport with OAuth2Provider {
  val baseUrl = "https://api.fda.gov/drug/"
  val apiKey = current.configuration.getString("fda.api.key").getOrElse("")

  //case classes and implicit Reads for handling Enforcement API calls
  case class ApiError(code: String)
  case class EnforcementResponse(error: Option[ApiError], results: Option[Seq[JsValue]])
  /*case class for handling Label API responses, while we could probably just
  pass the API response back to the client without modification, this shows how
  to map a JSON response to a custom type and automatically handle the JSON
  read/write process.*/
  case class LabelResponseResult(set_id: Option[String],
                                 indications_and_usage: Option[Seq[String]],
                                 keep_out_of_reach_of_children: Option[Seq[String]],
                                 dosage_and_administration: Option[Seq[String]],
                                 purpose: Option[Seq[String]],
                                 version: Option[String],
                                 id: String,
                                 active_ingredient: Option[Seq[String]],
                                 inactive_ingredient: Option[Seq[String]],
                                 effective_time: String,
                                 when_using: Option[Seq[String]],
                                 warnings: Option[Seq[String]])
  case class LabelResponse(error: Option[ApiError], results: Option[Seq[LabelResponseResult]])

  implicit val errorReads = Json.reads[ApiError]
  implicit val enforcementResponseReads = Json.reads[EnforcementResponse]
  implicit val labelResponseResultReads = Json.reads[LabelResponseResult]
  implicit val labelResponseResultWrites = Json.writes[LabelResponseResult]
  implicit val labelResponseReads = Json.reads[LabelResponse]

  //case class and implicits for automatic Json response
  case class DrugsApiResponse(recalls: Boolean,
                              recallDetails: Option[Seq[JsValue]],
                              labelChanges: Boolean,
                              labelDetails: Option[Seq[LabelResponseResult]])

  implicit val drugsApiResponseWrites = Json.writes[DrugsApiResponse]


  /**
   * Get a list of Recalls, if a search param is provided pass through to the
   * underlying FDA api to restrict the results to recalls that match the string
   * in ANY field. The request must be authorized by the DemoDataHandler to proceed
   * @param name String the Drug to look up data for
   * @return Future[Result] combined result of multiple FDA calls formatted for our
   *         use
   */
  def get(name: String) = Action.async { implicit request =>
    authorize(new DemoDataHandler()) { authInfo =>

      //build the date range for searches - go back 90 days
      val now = LocalDate.now()
      val start = now.minus(90, ChronoUnit.DAYS)
      val fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd")
      val dateFilter = s"effective_time:[${start.format(fmt)}+TO+${now.format(fmt)}]"


      //build the list of query params for the FDA api
      val enforcementParams = List(
        "api_key" -> apiKey,
        "limit" -> "3",
        "search" -> name)


      /*construct and execute webservice requests asynchronously. Both requests
      will execute immediately without blocking. Process the results when both
      requests finish. The label url just concatenates the query string onto the
      url itself because the withQueryString() method will urlencode parameters
      and the FDA api will error out on the encoded version of date range*/
      val enforcement = WS.url(baseUrl + "enforcement.json").withQueryString(enforcementParams: _*).get()
      val label = WS.url(s"${baseUrl}label.json?api_key=$apiKey&search=$name+AND+$dateFilter").get()

      /* Once both WS futures are resolved process the result into our custom
      response object and return the result as a Future */
      Future.sequence(Seq(enforcement, label)).map {
        case responses =>
          val enforcementResponse = Json.fromJson[EnforcementResponse](responses.head.json)
          val labelResponse = Json.fromJson[LabelResponse](responses(1).json)
          val apiResponse = DrugsApiResponse(
            enforcementResponse.asOpt.flatMap(_.error).isEmpty,
            enforcementResponse.asOpt.flatMap(_.results),
            labelResponse.asOpt.flatMap(_.error).isEmpty,
            labelResponse.asOpt.flatMap(_.results))
          Ok(Json.toJson(apiResponse))
      }
    }
  }

}
