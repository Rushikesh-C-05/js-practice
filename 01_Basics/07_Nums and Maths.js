const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // convert minus to plus
console.log(Math.round(4.3)); // round off
console.log(Math.ceil(4.2)); // top value 
console.log(Math.floor(4.9)); // floor value 
console.log(Math.min(4,3,6,8)); // min value
console.log(Math.max(4,3,6,8)); // max value

console.log(Math.random());  // gives value in between 0 and 1 always
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);