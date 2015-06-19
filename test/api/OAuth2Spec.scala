package api

import org.junit.runner._
import org.specs2.mutable._
import org.specs2.runner._
import play.api.http.Writeable
import play.api.test.Helpers._
import play.api.test._

/**
 * Created by patrickhutchinson on 6/18/15.
 */
@RunWith(classOf[JUnitRunner])
class OAuth2Spec extends Specification {

  val knownClientId = "cda45345c52711c59625f770"
  val dummyBody: String = s"""{"client_id": "$knownClientId", "grant_type": "client_credentials"}"""

  "/api/v1/auth_token" should {
    "have a 200 response for POST" in {
      running(FakeApplication()) {
        val post = route(FakeRequest(POST, "/api/v1/access_token", FakeHeaders(Seq(CONTENT_TYPE->Seq("application/json"))), dummyBody))(Writeable(_.getBytes, None)).get
        status(post) must equalTo(OK)
      }
    }
  }
}
