package controllers.api

import controllers.XhrActionSupport
import play.api.Play.current
import play.api.libs.concurrent.Execution.Implicits.defaultContext
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
        Ok(response.json)
      }
    }
  }

}
