const email = "xyz@gmmail.com"
const truthy = []

if(truthy){
    console.log("Got the email");
}
else{
    console.log("user email not detected");
    
}

// **** Falsy values ****
// 0,-0,false, NaN, null, undefined,"", BigInt 0n

// **** Truthy values ****
// "0", "false"," ",[],{}, function(){}

if (truthy.length === 0){
    console.log("Array is empty");
    
}


//nullish coalescing operator (??): null, undefined

// let var1
// var1 = 5??70
// let var2
// var2 = null ?? 80

// console.log(var2);


// Ternary opeator

const ice = 80
 ice >=90? console.log("Yes") : console.log("No");
 ;
 
