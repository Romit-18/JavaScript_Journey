console.log(2>1)//true
console.log("2">=2)//true
console.log("2"==2)//true why? "2" converted to number before comparision

console.log(null>0)
console.log(null<=0)//true why? values are converted to number and predictable output won't come
console.log(null>=0)//true why? js makes null =0 then check

console.log(undefined==0) // false
console.log(undefined==null)// true

//strict check=> ===
console.log("2"===2)//false


// we'll try to avoid the above mentioned conversion because it leads to confusion and it's not a good practice.
// remember the motive is to always right clean code 