#!/bin/sh

# MacOSX specific install

echo "installing Homebrew, casks, and versions..."
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install caskroom/cask/brew-cask
brew tap caskroom/versions

echo "installing install Java, Scala, SBT, and Node (jenv lets you easily maintain different jdk versions)..."
brew cask install java
brew install jenv
jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home
brew install scala
brew install sbt
brew install node

echo "installing VirtualBox..."
brew cask install virtualbox

echo "installing Docker..."
brew link docker
brew install boot2docker

echo "installing required npm packages"
cd ..
sudo npm install -g gulp
sudo npm install