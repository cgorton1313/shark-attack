# sharkattack

Run "npm install" to install node dependencies

cron job to restart server:
cd /home/penguinh/cs.penguinhall.org/sharkattack/ && nohup /home/penguinh/bin/node /home/penguinh/cs.penguinhall.org/sharkattack/index.js &

## Heroku Instructions
If working on branch "heroku-migration" you must force the push to main, otherwise Heroku ignores and doesn't build:

git push heroku heroku-migration:main

Differences shared hosting and Heroku:
- Procfile tells npm to use the start script from package.json
- package.json needs the start script and node version
- use .env to pick up config vars when running "heroku local"
- or, run with CodeRunner and pick up the || values
- gitignore .env
- logging will not be accessible at sharkAttack.log

Using ClearDB for the MySQL db, could never get remote mysql to allow access from Heroku

Used SQLectron to create db from phpmyadmin sql export