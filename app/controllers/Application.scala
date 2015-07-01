package controllers

import play.api.mvc._

/**
 * Base controller that simply loads the index page. The index page
 * (main.scala.html) This page in turn loads and AngularJS single page web
 * application.
 */
object Application extends Controller with XhrActionSupport {

  def index = indexWithPath("/")

  def indexWithPath(path: String) = Action {
    Ok(views.html.main("Med Pal"))
  }
}
