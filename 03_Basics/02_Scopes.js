//global scope and block scope
let a =20
const b =10
if(true){
let a = 100
const b = 330
var c = 30//scope issue
//console.log("Inner",b);

}
//console.log("outer:",b);

//nested scope

function one(){  //closure: child function can access parent functions variables 
  function  two(){    
   const website = "Yotube"
   //console.log(username);//runs 
  }
 //console.log(website);//error: scope 
  two();

}
one()


// *******************************INTERESTING********************




console.log(addone(6)); //this won't peoduce any error
function addone(num){
    return num+1
}

console.log(addtwo(3)); //error: Hoisting, addtwo is not acceessable
const addtwo = function(num){
    return num+2
}

