import play.PlayImport.PlayKeys.playRunHooks
import NativePackagerKeys._

name := """starter"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws
) 

// Docker packaging
// setting a maintainer which is used for all packaging types
maintainer := "SPARCedge"

// exposing the play ports
dockerExposedPorts in Docker := Seq(9000, 9443)
dockerBaseImage in Docker := "java:8"


// database
libraryDependencies ++= Seq(
  "com.nulab-inc" %% "play2-oauth2-provider" % "0.14.0",
  "ch.qos.logback" % "logback-classic" % "1.1.+",
  "com.newrelic.agent.java" % "newrelic-agent" % "3.17.0"
)

// webjars
libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.3.0-3",
  "org.webjars" % "angularjs" % "1.3.16",
  "org.webjars" % "bootstrap" % "3.1.1-2",
  "org.webjars" % "angular-ui-bootstrap" % "0.12.1-1",
  "org.webjars" % "angular-ui-select" % "0.11.2",
  "org.webjars.bower" % "lodash" % "3.9.3",
  "org.webjars" % "animate.css" % "3.3.0"
) 

// new relic config
mappings in Universal += {
	file("newrelic/newrelic.yml") -> "lib/newrelic.yml"
}

// run gulp
playRunHooks += RunSubProcess("gulp")

//disable documentation to speed build time
sources in (Compile, doc) := Seq.empty
publishArtifact in (Compile, packageDoc) := false

