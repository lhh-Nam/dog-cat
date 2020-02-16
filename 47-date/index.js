// Date
// momenf.js

var moment = require('moment');

// var now = new Date();
// var myBirthday = new Date( 1999, 0, 5);   // 04/01/1999

// console.log(now.getTime());
// console.log(myBirthday.getTime());

var now = moment('2020-02-19 00:00');
console.log(now.fromNow());
console.log(now.format('DD/MM/YYYY'));
