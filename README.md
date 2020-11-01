# PERN-stack
Working through Postgres, Express, React, Node.js stack.  

# install postgres and use commands in db.sql to navigate
see db.sql for the create table code.

# install node.js
create client and server directories and navigate to the server one in VS code

in server directory open a new terminal from the terminal dropdown menu at the top.

in the terminal run:
npm init -y

then:
npm install express

you should see package.json, package-lock.json and a node_modules folder which contains express as one of the directories

# see server.js for next bit of code
to run the application type in the terminal:
node server.js

# put in dotenv, and make sure to require it in server.js
npm install dotenv

# make it easier to not have to restart the server everytime:
npm install nodemon

this combined with autosave in VS Code is very handy.  

# shortcut
after installing node.js from https://nodejs.org/en/
in terminal in the server directory run:
npm init -y
npm install express
npm install dotenv
npm install nodemon
npm i morgan

# To see your routes in the browser:
http://localhost:4000/getRestaurants

If you changed the port in the .env file, then 4000 will be replaced by what you put in.  

# to test the routes install Postman
google it and download it.  
I created a team for us if it is actually useful or not, I'm not sure...
https://app.getpostman.com/join-team?invite_code=78d6697ae6976ec3237a3cc6ca3c947a

I had trouble figuring out Postman at first, I had to uninstall and reinstall it.  

To send POST,
Select Body, Raw, JSON then do all the JSON manipulation in there.  

PUT, GET, DELETE are similar.  
Put the route which could be: 
http://localhost:4000/api/v1/restaurants/123
into the POST, PUT, GET, DELETE request in postman.  

type json into the body, raw, json, make sure to use quotation marks on both the key and the value.  

# Routes cheatsheet:
Retrieve = GET
Create = POST
Update = PUT
Delete = DELETE

:id goes at the end of the route for PUT, DELETE and POST

# Connect Node with Postgres
https://node-postgres.com/
navigate to:
Express with async/await

to install postgres library:
npm i pg