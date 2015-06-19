package api

import org.specs2.mutable._
import org.specs2.runner._
import org.junit.runner._

import play.api.test._
import play.api.test.Helpers._


/**
 * Created by patrickhutchinson on 6/18/15.
 */
@RunWith(classOf[JUnitRunner])
class DrugsApiSpec extends Specification {
  "/api/v1/drugs/:name" should {
    "have a 200 response for GET" in {
      running(FakeApplication()) {
        val get = route(FakeRequest(GET, "/api/v1/drugs/hydrochloride").withHeaders("Authorization" -> "Bearer xyz")).get
        status(get) must equalTo(OK)
        contentType(get) must beSome.which(_ == "application/json")
      }
    }
  }
}
