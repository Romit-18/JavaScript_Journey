//for each loop

const coding = ["js","golang","java","c","rust"]

//type:1
// coding.forEach( function(item) {
//     console.log(item);
// } )

//type:2 using arrow function
// coding.forEach((item) => {console.log(item);
// })

//type 3: passing the parameter to a function
// function printMe(item){
//     console.log(item);
// }

//coding.forEach(printMe)

const programming = [
    {langname: "javascript",
        filename: "js"
    },
    {
        langname:"java",
        filename:"java"
    },
    {langname:"Python",
        filename:"py"
    }


]
programming.forEach((item)=>{console.log(item.langname)})