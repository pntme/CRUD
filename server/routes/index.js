var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var mongo = "mongodb://admin:admin123@localhost:27017/testApp?authSource=admin"

mongoose.connect(mongo, {useMongoClient: true});

var db = mongoose.connection;

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = router;
