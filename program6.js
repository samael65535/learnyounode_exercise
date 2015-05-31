/**
 * Created by samael on 15-5-30.
 */

var mymodule = require('./program6_module.js')

mymodule(process.argv[2], process.argv[3], function(err, data){
    data.forEach(function(cv) {
        console.log(cv);
    });
});