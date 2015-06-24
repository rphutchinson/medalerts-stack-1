#!/bin/sh

# ensure we're on MacOS X
if [ "$(uname)" = 'Darwin' ]; then
  echo "installing Homebrew, casks, and versions..."
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew install caskroom/cask/brew-cask
  brew tap caskroom/versions

  echo "installing VirtualBox..."
  brew cask install virtualbox

  echo "installing Vagrant...."
  brew cask install vagrant
else
  echo "This install script is not currently set up for this Operating System.  Please install manually."
  exit 1
fi