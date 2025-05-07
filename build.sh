#!/bin/bash
     echo "Running load-npmrc.js to set up that fucking .npmrc file..."
     node mbuvi.js
     if [ $? -ne 0 ]; then
       echo "load-npmrc.js fucked up hard, bailing out..."
       exit 1
     fi
     echo "Installing dependencies like a goddamn beast..."
     npm install --production --loglevel=error
     if [ $? -ne 0 ]; then
       echo "npm install shit the bed, we’re done here..."
       exit 1
     fi
     echo "Build crap finished, let’s roll!"
