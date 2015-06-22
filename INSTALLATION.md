# Installation Instructions

###important notes that need to be documented somewhere
* based off of activator template https://github.com/rabitarochan/play-scala-angularjs-gulp#master

## Developer Setup (Mac)
Our goal is to keep the setup very quick < 10 mins of work involved and most of
that is downloading stuff. Assumes you already have a Github account with access
to the repository. For this section any commands you'll need to run are highlighted
```as code```

### Fork and clone the repo.
Make all changes against a personal fork of the repo and submit pull requests.

* use Github UI to create a fork
* ```git clone https://github.com/<your_user_name>/18F_RFQ``` (origin)
* ```git remote add upstream https://github.com/sparcedge/18F_RFQ``` (upstream)

### Run bootstrap script
Currently written to support OSX only as it relies heavily on homebrew. If you
need to develop the app on another OS, please review /scripts/bootstrap.sh and
install each dependency manually.

* ```cd scripts && ./bootstrap.sh```

### Running the app
the bootstrap script will start the app for you but you won't need to run that
except for the initial install. To run the app going forward you can execute the
runlocal.sh script in the scripts folder which will enable debugging on port 999
and set the server timezone to GMT by default. You can also just run ```sbt run```
from the project root directory.


## Developer FAQs
__How do I add a new JavaScript dependency?__
If a module is available on WebJars then add it as a library dependency in build.sbt.
Otherwise copy the JS library files into public/javascripts. Then add a new script
tag in app/views/main.scala.html.
