package security

import java.util.Date

import play.api.libs.Crypto

import scala.concurrent.Future
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import scalaoauth2.provider.{AccessToken, AuthInfo, ClientCredential, DataHandler}
import play.api.Play.current

/**
 * Example User class
 * @param id Long - unique id of the user
 * @param name String
 * @param hashedPassword String
 */
case class User(id: Long, name: String, hashedPassword: String)

/**
 * This is an extremely simple, stubbed out implementation of the OAuth2 DataHandler
 * Absolutely NOT suitable for production use. The current implementation exists
 * solely to provide OAuth tokens to the client application. It DOES facilitate
 * generation of Bearer tokens to illustrate the OAuth2 workflow from the client
 * app and provides some very minimal security preventing unauthorized access to
 * our API. Unimplemented functions are not used by the demo client application
 */
class DemoDataHandler extends DataHandler[User] {
  val fakeUser = User(1, "demoUser", "fakePassword")
  val knownClientId = current.configuration.getString("known.client.id").getOrElse("")

  def validateClient(clientCredential: ClientCredential, grantType: String): Future[Boolean] = {
    Future(clientCredential.clientId == knownClientId)
  }

  def findUser(username: String, password: String): Future[Option[User]] = ???

  def createAccessToken(authInfo: AuthInfo[User]): Future[AccessToken] = ???

  def getStoredAccessToken(authInfo: AuthInfo[User]): Future[Option[AccessToken]] =

    /*just generates a new auth token every time, in a real implementation this
    should try and look up from the database*/
    Future(Some(scalaoauth2.provider.AccessToken(
      Crypto.generateToken,
      Some(Crypto.generateToken),
      authInfo.scope,
      None,
      new Date())))


  def refreshAccessToken(authInfo: AuthInfo[User], refreshToken: String): Future[AccessToken] = ???

  def findAuthInfoByCode(code: String): Future[Option[AuthInfo[User]]] = ???

  def findAuthInfoByRefreshToken(refreshToken: String): Future[Option[AuthInfo[User]]] = ???

  def findClientUser(clientCredential: ClientCredential, scope: Option[String]): Future[Option[User]] = {
    Future(Some(fakeUser))
  }

  def deleteAuthCode(code: String): Future[Unit] = ???

  def findAccessToken(token: String): Future[Option[AccessToken]] = Future(Some(AccessToken(token, None, None, None, new Date())))

  def findAuthInfoByAccessToken(accessToken: AccessToken): Future[Option[AuthInfo[User]]] =
    Future(Option(AuthInfo(fakeUser, None, None, None)))

}