/**
 * Created by samael on 15-5-30.
 */
var http = require('http');

http.get(process.argv[2], function(resp){
    resp.on('data', function(data) {
        console.log(data.toString());
    })
});