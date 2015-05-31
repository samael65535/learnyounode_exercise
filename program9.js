/**
 * Created by samael on 15-5-30.
 */

var http = require('http');

var bl = require('bl');

var result = new Array(3);

var okNum = 0;

var func = function (i) {
    http.get(process.argv[i], function(res) {
        res.pipe(bl(function(err, data){
            result[i - 2] = data.toString();
            okNum++;
            if (okNum == 3) {
                for(var j = 0; j < result.length; j++) {
                    console.log(result[j]);
                }
            }
        }));
    });
}


for (var i = 2; i < process.argv.length; i++) {
    func(i);
}
