var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
    //경로때문에 접근이 되지 않음;;; 나중에 조금더 고려 할 것.
    res.sendfile(__dirname + '/index.html');
});

app.post('/log', function (req, res) {
    res.send(200, true);
});

var clients = [];
io.on('connection', function (socket) {
    clients.push = socket.id;
    console.log("socket.id=" + socket.id + "가 등록되었습니다.");
});


var sendLog = function () {
    for(var idx = 0; idx<)
    io.sockets.connected[].emit("message", "test");
};


setInterval(function () {
        console.log("ttt");
        sendLog("test");
    }
    , 2000);