const accId = 2101033 // semicolon in js is optional
let accEmail = "romit@gmail.com"
var accPass = "13579"
accCity = "Kolkata"

//accId = 2 -> can't edit const variables.

accEmail = "rkp@gmail.com"
accPass = "2468"
accCity = "Bengalurur"
let accState
 // value = undefined
/*
we can declare a variable in 3 ways 1. var var_name, 2. let var_name, 3. var_name.
var var_name is not preferable because of the issues in block scope and funcional scope;

var_name also not recommanded, if the value is not initialised (eg. accStatel;) then it'll throw an error;

Best to use let var_name.
*/


//console.log(accId);

console.table([accId,accEmail,accPass,accCity,accState])



