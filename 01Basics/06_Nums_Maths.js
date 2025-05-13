//******************************************NUmber**********************************
const score = 400
const balance = new Number(100.52885)

console.log(balance.toString().length);
//console.log(typeof score);// object

console.log(balance.toFixed(1)); // one digit after decimal


const preciExp = 1267.9876

console.log(preciExp.toPrecision(5));

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'))


//**********************************************************MATHS***********************************************************

// console.log(Math.abs(-67))
// console.log(Math.round(78.98))
// console.log(Math.ceil(78.9))
// console.log(Math.floor(89.7))

console.log(Math.floor(Math.random()*10)+1); // ouput range: 0 - 1

const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1))+min);


