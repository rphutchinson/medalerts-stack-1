#!/bin/sh

# determine which install
if [ "$(uname)" = 'Linux' ]; then
  ./install_linux.sh
else
  if [ "$(uname)" = 'Darwin' ]; then
    ./install_macosx.sh
  else
    echo "This install script is not currently set up for this Operating System.  Please install manually."
    exit 1
  fi
fi

echo "starting the app"
cd scripts
./runlocal.sh