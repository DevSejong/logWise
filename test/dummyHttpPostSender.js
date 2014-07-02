var http = require('http');

var sendLogData = function () {
    var log = {
        harvesterInfo: {
            id: "test001",
            group: "test"
        },
        logs: [
            {
                level: "ERROR",
                time: 1403866881,
                message: "ERROR No appenders could be found for logger (net.sf.ehcache.CacheManager)."
            },
            {
                level: "INFO",
                time: 1403866881,
                message: "INFO Please initialize the log4j system properly."
            }
        ]
    };


    var logString = JSON.stringify(log);

    var headers = {
        'log' : logString
    };

    var options = {
        host: '127.0.0.1',
        port: 3000,
        path: '/log',
        method: 'POST',
        headers: headers
    };

    // Setup the request.  The options parameter is
    // the object we defined above.
    var req = http.request(options, function (res) {
        res.setEncoding('utf-8');

        var responseString = '';

        res.on('data', function (data) {
            responseString += data;
        });

        res.on('end', function () {
            //var resultObject = JSON.parse(responseString);
        });

    });

    req.on('error', function (e) {
        // TODO: handle error.
    });


    req.write(logString);
    req.end();

};

setInterval(sendLogData, 2000);
