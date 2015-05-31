/**
 * Created by samael on 15-5-30.
 */
var bl = require('bl');

var url = process.argv[2];

var http =require('http');

http.get(url, function(resp){
    resp.pipe(bl(function(err, data){
        console.log(data.toString().length);
        console.log(data.toString());
    }))
});