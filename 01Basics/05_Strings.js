// Modern Syntax of String
// String=> " " or ' '
const myName = new String("Romit Pal") // string is an object, store in key value pair
const name = "Romit "
let repoCount = 5
console.log(name +repoCount ); // concatinate two string: (Not recomanded)

console.log(`My name is ${name.toUpperCase()} and my repocount is ${repoCount}`); //``=>backticks, concept is called string interpolation: (Recomanded)

console.log(myName[4]);

console.log(myName.__proto__);
console.log(myName.toUpperCase());
console.log(myName)
console.log(myName.length);
console.log(myName.charAt(4));
console.log(myName.indexOf(" "));


let newName = myName.substring(0,5)  // 0 - (n-1) // "-" index not accepted 
console.log(newName);

let anotherName = newName.slice(-5,-1)
console.log(anotherName)

const newStr = "   Yo Yo  "
console.log(newStr);
console.group(newStr.trim()) //trimStart(),trimEnd()


const url = "https://romit.comrkp%18-pal%18-007" 

console.log(url.replace("%18","&"));// output: https://romit.comrkp&-pal%18-007

console.log(url.includes("https://")); //output: true (Boolean)

console.log(myName.split("-"));
