
//load requirements
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// define schema for admin
var Schema = mongoose.Schema;

/**
 * define the schema for our admin model
 * @param  {Number} id
 * @param  {String} email
 * @param  {String} password
 */

var UserSchema =  Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
      },
      username: {
        type: String,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true
      },
      gender: {
        type: String,
        // required: true
      },
      passResetKey: String,
      passKeyExpires: Number,
      createdAt: {
        type: Date,
        // required: false
      },
      updatedAt: {
        type: Number,
        // required: false
      },
    }, {runSettersOnQuery: true}); // 'runSettersOnQuery' is used to implement the specifications in our model schema such as the 'trim' option.
    
//     UserSchema.pre('save', function (next) {
//       this.email = this
//         .email
//         .toLowerCase(); // ensure email are in lowercase
    
//       var currentDate = new Date().getTime();
//       this.updatedAt = currentDate;
//       if (!this.created_at) {
//         this.createdAt = currentDate;
//       }
//       next();
// });

// Compile model from schema
var user = mongoose.model('user', UserSchema);

module.exports = user;