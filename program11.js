/**
 * Created by samael on 15-5-31.
 */

var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];
var server = http.createServer(function (req, res) {
    // 处理请求的逻辑...
    var src = fs.createReadStream(path);
    src.pipe(res);
});
server.listen(port);