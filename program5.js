/**
 * Created by samael on 15-5-30.
 */

var fs = require('fs');

var path = require('path');

var ext = process.argv[3]
fs.readdir(process.argv[2], function(err, data) {

    for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i]) == '.' + ext) {
            console.log(data[i]);
        }
    }
});