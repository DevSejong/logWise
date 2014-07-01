var http = require('http');

var dummyHttpPostRequest = function (body) {
    var bodyStr = JSON.stringify(body);

    var options = {
        host: '127.0.0.1',
        path: '/log',
        port: '3000',
        method: 'POST',
        headers : {
            "Content-Type": "application/json",
            "Content-Length": bodyStr.length
        }
    };

    var req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });


    req.write(bodyStr);
    req.end();
};

var dummyLogData  = {
    harvesterInfo : {
        id : "test001",
        group : "test"
    },
    logs : [
        {
            level : "ERROR",
            time : 1403866881,
            message : "ERROR No appenders could be found for logger (net.sf.ehcache.CacheManager)."
        },
        {
            level : "INFO",
            time : 1403866881,
            message : "INFO Please initialize the log4j system properly."
        }
    ]
};

setInterval(
    function () {
        dummyHttpPostRequest({"hello" : "world!"})
    }, 2000
);