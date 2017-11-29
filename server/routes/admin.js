var express = require('express');
var router = express.Router();

/* GET users listing.66 */
router.get('/', function(req, res, next) {
  res.send('responding for admin');
});

module.exports = router;
