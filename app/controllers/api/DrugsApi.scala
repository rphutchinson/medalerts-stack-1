package controllers.api

import controllers.XhrActionSupport
import play.api.Play.current
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.json.{JsValue, Json}
import play.api.libs.ws._
import play.api.mvc._
import security.DemoDataHandler

import scala.collection.mutable.ListBuffer
import scalaoauth2.provider.OAuth2Provider

/**
 * Created by patrickhutchinson on 6/18/15.
 */
object DrugsApi extends Controller with XhrActionSupport with OAuth2Provider {
  val baseUrl = "https://api.fda.gov/drug/enforcement.json"
  val apiKey = current.configuration.getString("fda.api.key").getOrElse("")

  //case classes and implicits for handling Enforcement API calls
  case class ApiError(code: String)
  case class EnforcementResponse(error: Option[ApiError], results: Option[Seq[JsValue]])
  implicit val errorReads = Json.reads[ApiError]
  implicit val enforcementResponseReads = Json.reads[EnforcementResponse]

  //case class and implicits for automatic Json response
  case class DrugsApiResponse(recalls: Boolean, recallDetails: Option[Seq[JsValue]])
  implicit val drugsApiResponseWrites = Json.writes[DrugsApiResponse]

  /**
   * Get a list of Recalls, if a search param is provided pass through to the
   * underlying FDA api to restrict the results to recalls that match the string
   * in ANY field
   * @param name String the Drug to look up data for
   * @return
   */
  def get(name: String) = Action.async { implicit request =>
    authorize(new DemoDataHandler()) { authInfo =>
      //build the list of query params for the FDA api
      val params = ListBuffer(
        "api_key" -> apiKey,
        "limit" -> "10",
        "search" -> name)

      //construct the request
      val holder: WSRequestHolder = WS.url(baseUrl).withQueryString(params: _*)

      //execute the request, asynchronously process the response and return JSON
      holder.get().map { response =>
        val enforcementResponse = Json.fromJson[EnforcementResponse](response.json)

        val apiResponse = DrugsApiResponse(
          enforcementResponse.asOpt.flatMap(_.error).isEmpty,
          enforcementResponse.asOpt.flatMap(_.results))

        Ok(Json.toJson(apiResponse))
      }
    }
  }

}
