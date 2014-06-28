var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    console.log(req.body.hello);
    res.send(200, true);
});

module.exports = router;