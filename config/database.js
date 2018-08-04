//Import the mongoose module
var mongoose = require('mongoose');

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Set up default mongoose connection
//Get the default connection
var dburl = 'mongodb://127.0.0.1/Database1';
var connection = mongoose.connection.openUri(dburl);

//Bind connection to error event (to get notification of connection errors)
connection.on('error', console.error.bind(console,'MongoDB connection error' ));
 
module.exports = connection;