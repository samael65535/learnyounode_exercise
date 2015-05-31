/**
 * Created by samael on 15-5-31.
 */
var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (req.method != 'GET')
        return res.end();

    var result;
    if (q.pathname == '/api/parsetime') {
        var date = new Date(q.query.iso);
        result = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    }

    if (q.pathname == '/api/unixtime') {
        var date = new Date(q.query.iso);
        result = {
            "unixtime": date.getTime()
        }
    }
    if(result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }

});
server.listen(port);

