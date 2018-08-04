NodeJs Authentication(Session Based Authentication Method)

## Development

This project have written in Node.js and using MongoDB as database <br>

## Requirements

For running this app, you need to install Node.js from: https://nodejs.org/en/download/ <br>
In addition, you need to install MongoDB from here: https://www.mongodb.com/download-center#atlas <br>
You can use any text editor for editing code but I used Visual Studio Code for writing this project: <br>
 https://code.visualstudio.com/download

## Running Server Side

First you need to install dependencies:

### `npm install`

Run installed MongoDB in your machine.
In the 'config\database.js' you can change name of your database by the 'dburl' variable

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) in the browser.<br>
All routes are available in 'app' directory and can test through Postman(https://www.getpostman.com/apps)

note: After logout, you are not authorize to see '/protected' url 
