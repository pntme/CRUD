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


userSchema.pre('save', function(next) {
  console.log('calling save')
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

userSchema.pre('findOneAndUpdate', function(next) {
   doc = this.getUpdate();
   query = this.getQuery();
   doc.updated_at = new Date();
  next();
});
var User = mongoose.model('User', userSchema);

module.exports = User;