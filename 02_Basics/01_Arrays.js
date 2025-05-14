const arr1 = [0,1,2,3,4,5, true, "Romit"] //types of element can be different
const arr2 = new Array(1,2,3,4,5)
//console.log(typeof arr1);

//Array methods

const myarr = new Array();
myarr.push(6)
myarr.push(6)
myarr.push(5)
myarr.push(88)
myarr.push(97)
myarr.push(24)
myarr.push(64)
myarr.pop()
myarr.unshift(9)//insert an element at the beginning
myarr.shift(9) //delete an element from the beginning
myarr.indexOf(9) //if the element is not present, o/p = -1
//console.log(myarr);

const newArr = myarr.join(); //typeof newArr = string (comma seperated)


// console.log(myarr); //typeof: object (array)
// console.log(newArr); //typeof: String

//slice, splice


//slice -> Does not modify the original array.
// Returns the extracted elements as a new array.

console.log("A ",myarr)
const slex = myarr.slice(1,3)
console.log("Slice operation: ", slex);
console.log("B ", myarr);

//splice-> It modifies the original array.
// Returns the extracted elements as a new array.

const spex = myarr.splice(1,3)
console.log("Splice operation: ", spex);
console.log("c ", myarr);








