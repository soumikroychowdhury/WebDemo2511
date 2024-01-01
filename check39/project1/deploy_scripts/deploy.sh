#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v/bin

cd project1
 git pull origin master
 cd server
 pm2 kill
 pm2 start index.js