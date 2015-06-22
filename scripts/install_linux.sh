#!/bin/sh

# linux specific install
echo "updating package manager..."
sudo apt-get update

echo "installing Java..."
sudo apt-get install -y openjdk-8-jdk

echo "installing Scala..."
sudo apt-get install -y scala

echo "installing sbt..."
echo "deb http://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-get update
sudo apt-get install -y --force-yes sbt

echo "installing NodeJS..."
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
sudo apt-get install -y nodejs

echo "installing VirtualBox..."
sudo apt-get install virtualbox

echo "installing Docker..."
sudo apt-get install wget
wget -qO- https://get.docker.com/ | sh

echo "installing required npm packages..."
cd ..
sudo npm install -g gulp
sudo npm install