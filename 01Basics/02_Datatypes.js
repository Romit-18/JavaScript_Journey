"use strict"; //treat all js code as newer version
//
// alert(3+3) // we're using node.js not browsers
console.log(3+3+"Hello")

let name = "Virat Kohli"
let age = 32
let isLoggedIn = false
let state = null
let birthday
// number => 2 to the power 53
// bigint
// string => " " or ' '
// booleam => true/ false
// null => stand alone value
// undefined => value to assigned to declared variable
// symbol => To find unique


//object
console.log(typeof state) //object
console.log(typeof birthday) ///undefined

console.log(typeof Date);




// ********************************************Datatype Summery & Memeory(STack & Heap)****************************************************************

// Types of datatype:
// 1. Primitive: Store in Memory=> stack((Copy will be given, so original value will not get manipulated): 
// Call by Value: Number,Boolean, Null,undefined,Symbol(To make something Unique),
//  bigInt(Scientific value or big number;exp.555757575757575n)

// 2.  Primitive:Store in Memory=> Heap(Reference will be given, so original value will get manipulated):
//  Call by Reference: Array, object, Function


/*#Js is dynamically typed language because  variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:
let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
*/


const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 == id2);//false, becausee id1 and id2 both are unique

const bigNum = 368289957378899999973676387891n // type: undefined


// Reference datatypes

const Heroes = ["Avenger","Thunderbolts*","Daredevil"] // array
console.log(Heroes);

let myObj = {
    name: "Romit",
    age: 22,
    Designation: "Software_Engineer"
}
console.log(typeof str1);


// Note:

/*typeof:
number = number
String = string
null: object
undefined: undefined
bigInt: undefined
function: function(function object)
Symbol: Symbol
Non primitive datatypes: object (Except function)*/