/**
 * Created by samael on 15-5-30.
 */
var t = 0;
for (var i = 2; i < process.argv.length; i++) {
    t += parseInt(process.argv[i]);
}
console.log(t);