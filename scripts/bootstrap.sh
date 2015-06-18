#!/bin/sh

echo "installing Homebrew, casks, and versions"
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install caskroom/cask/brew-cask
brew tap caskroom/versions

echo "installing install Java, Scala, SBT, and Node (jenv lets you easily maintain different jdk versions)"
brew cask install java
brew install jenv
jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
brew install scala
brew install sbt
brew install node

echo "installing required npm packages"
cd ..
npm install

echo "starting the app"
cd scripts
./runlocal.sh
