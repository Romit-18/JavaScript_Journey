const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", 'Flash', 'Batman']
//marvel.push(dc); //this type of merge is not recomanded
//console.log(marvel)
//console.log(marvel[3])

const heroes= marvel.concat(dc) //return a new array
console.log(heroes.length)

const allheroes = [...marvel, ...dc] //spread operator = spread the array, send a new array
console.log(allheroes);

const anotherArr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
//console.log(anotherArr);

const betterAnotherArr = anotherArr.flat(Infinity) //spread out the nested array to a single array
//console.log(betterAnotherArr)


console.log(Array.isArray(betterAnotherArr)); //false
console.log(Array.from('betterAnotherArr')); //convert a non array to a array ; output:['b', 'e', 't', 't',
                                                                                //   'e', 'r', 'A', 'n',
                                                                                //   'o', 't', 'h', 'e',
                                                                                //   'r', 'A', 'r', 'r'
                                                                                // ]

console.log(Array.from({name:"ROmit"}));   // o/p:[] <- empty array, interesting:key-value pair not allowed,  make all keys as an array & vice versa


const s1 = 100
const s2 = 200
const s3 = 300

console.log(Array.of(s1,s2,s3)) //o/p: [100,200,300]


