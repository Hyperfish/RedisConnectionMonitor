var child_process = require('child_process');
var fs = require('fs');

let outStream = fs.createWriteStream('log_' + Date.now() + '.txt');
let header =('"milliseconds"' + ' "locale string"' + ' \t\t"iso time"' + ' \t\t"log message"')

console.log(header);
outStream.write(header + '\n')

setInterval(() => {

    child_process.exec("echo 'select 0' |  redis-cli -h " + process.env['REDIS_HOST'] + " -a " + process.env['REDIS_KEY'], (error, stdout, stderr) => {
        let res = Date.now() + ' ' + new Date().toLocaleString() + ' ' + new Date().toISOString() + ' ' + (stdout + stderr).trim();
        console.log(res);
        outStream.write(res + '\n');

    });
}, 5 * 1000)


