import play.PlayImport.PlayKeys.playRunHooks

name := """starter"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws
)

// database
libraryDependencies ++= Seq(
  "ch.qos.logback" % "logback-classic" % "1.1.+"
)

// webjars
libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.3.0-2",
  "org.webjars" % "angularjs" % "1.3.15",
  "org.webjars" % "bootstrap" % "3.1.1-2",
  "org.webjars" % "angular-ui-bootstrap" % "0.12.1-1"
)

// run gulp
playRunHooks += RunSubProcess("gulp")
