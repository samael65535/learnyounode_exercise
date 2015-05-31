/**
 * Created by samael on 15-5-31.
 */
var http = require('http');
var port = process.argv[2];
var map = require('through2-map');
var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end();

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(port);