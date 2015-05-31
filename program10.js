/**
 * Created by samael on 15-5-30.
 */
var net = require('net')
var strftime = require('strftime');
var server = net.createServer(function (socket) {
    // socket 处理逻辑
    var str  = strftime("%F %R", new Date());
    //console.log(str)
    socket.end(str)
});
server.listen(process.argv[2])
