var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
    //경로때문에 접근이 되지 않음;;; 나중에 조금더 고려 할 것.
    res.sendfile(__dirname + '/index.html');
});

app.post('/log', function (req, res) {
    console.log(req.body);

    res.send(200, true);
});

var clients = [];
io.on('connection', function (socket) {
    clients.push(socket.id);
    console.log("socket.id=" + socket.id + "가 등록되었습니다.");
});

var logCore = (function (clients, io) {
    var sendLog = function(){
        console.log(io);
        io.sockets.socket(clients[0]).emit("전송!!!");
    };

    return {
        sendLog: sendLog
    };
})(clients, io);


setInterval(function(){
        console.log("test");
        logCore.sendLog("test");
    }
    , 2000);