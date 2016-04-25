var moment = require('moment');

var now = moment();

// console.log(now.format());

// console.log(now.valueOf());
// console.log(now.format('x'));

var timestamp = 1461586474512;

var timestampMoment = moment.utc(timestamp);



console.log(timestampMoment.local().format('hh:mma'));

//console.log(now.format('MMM Do YYYY, h:mma'));