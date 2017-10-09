/**
 * Created by huhai on 2017/7/16.
 */
let ONE = require('./exports_1')
let TWO = require('./exports_2')
let  fs= require('fs')
fs.readFile('./package.json', function (err, buffer) {
  if (err) throw err;
  console.log(buffer);
});
console.log("地址",address )
console.log(ONE,TWO)


