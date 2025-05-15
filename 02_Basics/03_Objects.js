// Objects can be made in 2 ways 1. using literals, 2. using constructor
// singleton creates when we declare objects using constructor, but not when we use literals

Object.create //using constructor

const mySym = Symbol("123")

//using literal
const obj1 = {
    "full name": "Romit Pal",
    age: 22,
    city: "Kolkata",
    [mySym] : "key1", //using [] in the key, makes it a symbol
    mobile: 234514413413,
    isLegit: true,
    workShift: ["Mon","Tues","Wed"]
    

}   //key value pair

//access the element
//Approach 1
//console.log(obj1.workShift)

//Approach 2

//console.log(obj1["city"])

//why do we need to know about the 2nd approach
// we can't access "full name" without the 2nd approach as there's one space
console.log(obj1["full name"]) //only way


//also we can't access symbol 
//console.log( obj1["city"]);

obj1.mySym = "Bengaluru" //to update some element in the object
//console.log( obj1[mySym]);
//Object.freeze(obj1) //can't edit/update obj1 further
//console.log(obj1);


obj1.greeting = function(){
    console.log(`Hello Js User ${obj1.city}`);
    
}

console.log(obj1.greeting());
