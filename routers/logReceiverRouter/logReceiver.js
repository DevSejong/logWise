var express = require('express');
var io = require('socket.io')(server);


router.post('/', function (req, res) {
    console.log(req.body.hello);
    res.send(200, true);
});

module.exports = router;