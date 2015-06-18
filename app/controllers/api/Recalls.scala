package controllers.api

import controllers.XhrActionSupport
import play.api.Play.current
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.ws._
import play.api.mvc._

import scala.collection.mutable.ListBuffer

/**
 * Created by patrickhutchinson on 6/18/15.
 */
object Recalls extends Controller with XhrActionSupport {

  val baseUrl = "https://api.fda.gov/drug/enforcement.json"
  val apiKey = current.configuration.getString("fda.api.key").getOrElse("")

  /**
   * Get a list of Recalls, if a search param is provided pass through to the
   * underlying FDA api to restrict the results to recalls that match the string
   * in ANY field
   * @param search Option[String] optional search parameter
   * @return
   */
  def get(search: Option[String]) = Action.async {

    //build the list of query params for the FDA api
    var params = ListBuffer(
      "api_key" -> apiKey,
      "limit" -> "10")
    if(search.isDefined){
      params += ("search" -> search.get)
    }

    //construct the request
    val holder: WSRequestHolder = WS.url(baseUrl).withQueryString(params:_*)

    //execute the request, asynchronously process the response and return JSON
    holder.get().map {response =>
      Ok(response.json)
    }
  }


}
