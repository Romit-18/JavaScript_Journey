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


//fetch value from database

const user =[
    {
        id:1,
        email: "a@gmail.com"
    },
     {
        id:2,
        email: "b@gmail.com"
    },
     {
        id:3,
        email: "c@gmail.com"
    },
     {
        id:4,
        email: "d@gmail.com"
    },
     {
        id:5,
        email: "e@gmail.com"
    },
     {
        id:6,
        email: "f@gmail.com"
    },
]
//console.log(user[1].email);

console.log(Object.keys(bumble));
console.log(Object.values(bumble));
console.log(Object.entries(bumble));
console.log(bumble.hasOwnProperty("usernme"));
