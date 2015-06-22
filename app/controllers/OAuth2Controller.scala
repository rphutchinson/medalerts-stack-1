package controllers

import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}
import security.DemoDataHandler

import scalaoauth2.provider._
object OAuth2Controller extends Controller with OAuth2Provider {
  def accessToken = Action.async { implicit request =>
    issueAccessToken(new DemoDataHandler())
  }
}
