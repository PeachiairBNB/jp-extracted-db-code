Database for Docker

For configuring the deployed mongo database on a regular EC2:
1. sudo apt-get update / curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - / sudo apt-get install -y nodejs /  sudo apt-get install git
2. sudo apt install -y mongodb / sudo npm install mongoose / sudo npm install csv-writer
3. (get the repo)
4. ./newVersion/newSeedingScript.js
5. npm run upload-csv
6. sudo mkdir -p /data/db (probably)

For configuring the deployed server on a regular EC2:
1. sudo apt-get update / curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - / sudo apt-get install -y nodejs /  sudo apt-get install git
2. (get the repo)
3. sudo npm install
4. npm run startboth-p