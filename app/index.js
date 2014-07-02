var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

function findClients() {
    var res = [];
    for (var id in io.of("/").connected) {
        res.push(io.of("/").connected[id]);
    }
    return res;
}


app.get('/', function (req, res) {
    //경로때문에 접근이 되지 않음;;; 나중에 조금더 고려 할 것.
    res.sendfile(__dirname + '/index.html');
});

app.post('/log', function (req, res) {
    io.of("/").emit("message", req.headers.log);
    res.send(200, true);
});

io.on('connection', function (socket) {
    console.log("socket.id=" + socket.id + "가 접속하였습니다.");
});
