const user = {
    username:"Romit",
    price: 99999,
    welcomemsg: function welcome(){
                console.log(`${this.username}, Welcome to the course`);
                //console.log(this);
                
                        }
}

//user.welcomemsg("rmit")
user.username = "uio"
//user.welcomemsg()

//Browser's global object: window object
console.log(this); //in node envirnment if we run "this", in global scopre this return empty obj{}


// function thisFn(){
//     console.log(this.username); //o/p = undefined, this works with object not function
    
// }
// thisFn()


//arrow func:

const arrowExp = ()=> {
   let username = "YOYO"
   console.log(this.username);
} 

//arrowExp()

//type one
let arrowExp2 = (num1,num2) =>{
    return num1+num2
}
//console.log(arrowExp2(33333,44444))


//type 2


let arrowExp3 = (num1,num2) =>(num1+num2)  //return keyword doesn't need to have
//console.log(arrowExp2(33333,44444))


//for object
let arrowExp4 = () =>({obj1:"Romit"})

console.log(arrowExp4())