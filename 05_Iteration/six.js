// const coding = ["js","golang","java","c","rust"]

// const values= coding.forEach((item)=> {
//     console.log(item)
//     return values //it doesn't return any values
// })

// console.log(values); // undefined

//Filter() => used to filer out the result of an array 

// const myNums = [10,20,30,40,50]

// const newNums = myNums.filter( (num)=>{ 
//     return num>30
// })   //filter can return a value after checking conditions
// console.log(newNums);

//how we can do it using for each?? below:


const myNums = [10,20,30,40,50]

myNums.forEach((num)=>{
    if(num>4){
        myNums.push(num)
    }
    
})
