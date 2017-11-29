// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  f_name: String,
  l_name: String,
  email: String,
  updated_at: Date,
  created_at: Date
});

// the schema is useless so far
// we need to create a model using it


userSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;