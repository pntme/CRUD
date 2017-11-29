var express = require('express');
var router = express.Router();
var User = require('../modals/test_users');

/* GET users listing. d*/
router.get('/', function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) throw err;
        else
            res.send(users)
    });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var chris = new User(req.body);
    chris.save(function(err) {
        if (err) throw err;
        else
            res.send({
                error: 0,
                data: req.body
            })
    })

});

router.delete('/:_id', function(req, res, next) {
    console.log(req.params);
    User.remove(req.params, function(err, users) {
        if (err) throw err;
        else
            res.send({
                error: 0,
                data: users
            });
    })

});

router.put('/', function(req, res, next) {
    User.update({
            _id: req.body._id
        }, req.body, {
            upsert: true
        },

        function(err, user) {
            if (err) throw err;
            // object of the user
            res.send({
                error: 0,
                data: user
            })
        });

});


module.exports = router;