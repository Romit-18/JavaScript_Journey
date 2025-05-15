// const bumble = new Object()  //using constructor

const bumble ={}
bumble.username = "romit__07"
bumble.id = 90982
bumble.username = "Romit Pal"

const regularUser ={
    email: "bruh@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Romit",
            lastname: "Pal"

        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);

//combine objects
const o1={1:"A",2:"B"}
const o2={3:"C",4:"D"}
const o3 =Object.assign({},o2,o1) //method 1: assign operator

const o4 = {...o1,...o2} //method 2: spread operator
console.log(o4);
