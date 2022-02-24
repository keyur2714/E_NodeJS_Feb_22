var util = require('./util');
console.log(util.msg);
k=util.sum(11,22);
console.log(k);
console.log("Good Morning...!");

var person = util.person;

console.log(person.city);

util.log.info("Hi...!");

util.log.warning("This is First Warninig...!");


util.log.error("This is Error...!");