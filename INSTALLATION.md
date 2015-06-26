# Installation Instructions

Before diving into the instructions, please enjoy the following haikus our Technical Architect came up during this project:

*written on tues 6/23*
> sparc team writing code  
> you should pick us 18f  
> look at our cool app

*written on wed 6/25*
> getting scared of drugs  
> so many ways to kill you  
> thank god for medalerts

## Developer Setup
Ok, our goal is to keep the manual pieces of the setup as minimal as possible and automate the downloading and installation of dependencies.

There is an installation script for both Mac and Debian Linux, as well as one for Vagrant...a choose your own adventure if you will.

### First, fork and clone the repo
Make all changes against a personal fork of the repo and submit pull requests.

After forking the repo from the GitHub Website...  
```sh
$ cd <projects folder>
$ git clone https://github.com/<your_user_name>/medalerts-dev
$ git remote add upstream https://github.com/sparcedge/medalerts-dev
``` 

### Then, decide if you want to use Vagrant (OSX Only)
If you would like to use Vagrant, we've provided a [Vagrant file](Vagrantfile) and an [install script](scripts/install_vagrant.sh) to automation the process of getting Vagrant installed on your system.   
Currently the install script only supports OSX as it relies heavily on homebrew.  
If you wish to install a Vagrant or a VM on another OS, please review the [install script](scripts/install_vagrant.sh) for guidance.  

*Note: the Vagrant file will install:*
* [VirtualBox](https://www.virtualbox.org/), 
* [Vagrant](https://www.vagrantup.com/)
* and use a [Ubuntu 15.04 (Vivid Vervet)](http://releases.ubuntu.com/15.04/) release for the vagrant box

To use the script to install vagrant please do the following:
```sh
$ cd <projects folder>/medalerts-dev/scripts
$ ./install_vagrant.sh
```

Once this completes, you can know ssh into your vagrant box, and execute all successive commands by doing the following:
```sh
$ cd <projects folder>/medalerts-dev
$ vagrant up
$ vagrant ssh
```

You can now procceed to installing the dependiencies and libraries as listed next.

### Now, Install Dependencies, Libraries, etc... (OSX and Debian)
Whether you are using Vagrant or not, the steps here are the same.   
Currently the [bootstrap script](scripts/bootstrap.sh) is only supports OSX and Debian based Linux as it relies heavily on homebrew.   
If you need to develop the app on another OS, please review the [bootstrap script](scripts/bootstrap.sh) and install each dependency manually.  

*Note: If installing on OSX, the bootstrap script will install:*
* [Homebrew](http://brew.sh/)
* [Cask](http://caskroom.io/)
* [Cask Versions](https://github.com/caskroom/homebrew-versions)

*Note: the install script will install the following regardless of OSX or Debian:*
* [Java 8](http://openjdk.java.net/projects/jdk8/)
* [Jenv](http://www.jenv.be/)
* [Scala](http://www.scala-lang.org/)
* [sbt](http://www.scala-sbt.org/)
* [NodeJS](https://nodejs.org/)
* [GulpJS](http://gulpjs.com/)

To install the dependencies, libraries and supportive files you will want to run the one-time [bootstrap script](scripts/bootstrap.sh).

_if you're using Vagrant_
```sh
$ cd /vagrant/scripts
$ ./bootstrap.sh
```

_if you're not using Vagrant_
```sh
$ cd <projects folder>/medalerts-dev/scripts
$ ./bootstrap.sh
```

*Note: this script will also start the app*

### Running the app successive times
Now, that you decided on whether to use Vagrant or not and installed it, as well as, run the bootstrap script.   
You can now, just...
```sh
$ cd <projects folder>/medalerts-dev
$ sbt run
```

This will make the app available via [localhost on port 9000](http://localhost:9000), will enable debugging on port 999, and set the server timezone to GMT by default.

## Developer FAQs
__How do I add a new JavaScript dependency?__
If a module is available on WebJars then add it as a library dependency in build.sbt.
Otherwise copy the JS library files into public/javascripts. Then add a new script
tag in app/views/main.scala.html.

__Which activator template is this app based off of__
This app is based off the activator template https://github.com/rabitarochan/play-scala-angularjs-<gulp id="master"></gulp>
