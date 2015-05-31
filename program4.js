/**
 * Created by samael on 15-5-30.
 */
var fs = require('fs');
var path = process.argv[2]
fs.readFile(path,  function(err, data) {
    var str = data.toString();
    console.log(str.split('\n').length - 1);
});