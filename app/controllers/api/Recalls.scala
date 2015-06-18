package controllers.api

import controllers.XhrActionSupport
import play.api.Play.current
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.ws._
import play.api.mvc._

/**
 * Created by patrickhutchinson on 6/18/15.
 */
object Recalls extends Controller with XhrActionSupport {
  val baseUrl = "https://api.fda.gov/drug/enforcement.json"
  val apiKey = current.configuration.getString("fda.api.key").getOrElse("")

  def get = Action.async {
    val holder: WSRequestHolder = WS.url(baseUrl)
      .withQueryString(
        "api_key" -> apiKey,
        "limit" -> "10",
        "search" -> "\"Hydrochloride\"")
    
    holder.get().map {response =>
      Ok(response.json)
    }

  }
}
