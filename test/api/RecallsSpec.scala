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
class RecallsSpec extends Specification {
  "/recalls" should {
    "have a 200 response for GET" in {
      running(FakeApplication()) {
        val get = route(FakeRequest(GET, "/api/v1/recalls")).get
        status(get) must equalTo(OK)
      }
    }

    "return application/json" in {
      running(FakeApplication()) {
        val get = route(FakeRequest(GET, "/api/v1/recalls")).get
        contentType(get) must beSome.which(_ == "application/json")
      }
    }

    "use a query param" in {
      running(FakeApplication()) {
        val get = route(FakeRequest(GET, "/api/v1/recalls?search=Hydrochloride")).get
        contentType(get) must beSome.which(_ === "application/json")
        //todo: validate that the response contains the requested string
      }
    }
  }
}
