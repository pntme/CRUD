var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongo = "mongodb://admin:admin123@localhost:27017/testApp?authSource=admin"

mongoose.connect(mongo, {useMongoClient: true});

var db = mongoose.connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// MongoClient.connect('mongodb://localhost:27017/testApp', function (err, db) {
//   if (err) throw err
//   else console.log('connected');	

 
// })
module.exports = router;
