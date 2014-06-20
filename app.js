var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/view/index.html');
});

io.on('connection', function (socket) {
    var idx = 0;

    setInterval(function(){
        idx +=1;

        console.log("test" + idx);
        socket.emit('news', { log: 'log1번입니다.' + idx });
    }, 2);
});