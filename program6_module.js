var fs = require('fs')
var pathModule = require('path')
module.exports = function(path , extname, callback) {
    var result = [];
    fs.readdir(path, function(err, data) {
        if (err) return callback(err)
        for (var i = 0; i < data.length; i++) {
            if (pathModule.extname(data[i]) == '.' + extname) {
                result.push(data[i])
            }
        }
        callback(err, result)
    })
};