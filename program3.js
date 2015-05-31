/**
 * Created by samael on 15-5-30.
 */
var fs = require('fs');
var path  = process.argv[2];
var buff = fs.readFileSync(path);
var result = buff.toString('ascii')
//console.log(result);
console.log(result.split('\n').length - 1)
