var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(3000);

//메인 페이지 열기
app.get('/', function (req, res) {
    //경로때문에 접근이 되지 않음;;; 나중에 조금더 고려 할 것.
    res.sendfile(__dirname + '/index.html');
});

//socket.io를 사용한 통신
io.on('connection', function (socket) {
    console.log("socket.id=" + socket.id + "가 접속하였습니다.");
});



//udp
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var PORT = 33333;
var HOST = '127.0.0.1';

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    io.of("/").emit("message", {"test" : message.toString()});
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

server.bind(PORT, HOST);
