// High Order Array loops


// For of loop
//["","",""]
//[{},{},{}]

//for of loop in array

// let arr = [1,2,3,4,5]
// for (const val of arr) {
//     console.log(val)
// }


// Map

const map = new Map();
map.set("IN", "India")
map.set("USA", "United states of america")
map.set("FR","France")

//for of loop works here on Maps
for (const [key,value] of map) {
    console.log(key,value);
    
}


// const myObj ={
//     game1: "Ironman",
//     game2: "Efootball"
// }

//for of loop doesn't work on object