#!/bin/bash
     echo "Running load-npmrc.js to set up that .npmrc file..."
     node mbuvi.js
     echo "Installing dependencies like a badass..."
     npm install --production
     echo "Build done!"
