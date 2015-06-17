#!/bin/sh
cd .. && npm install && sbt -jvm-debug 9999 -Duser.timezone=GMT run