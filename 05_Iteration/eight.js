//reduce(): It's used at a place where you have to take all the elements of an array and come out of an single value out of them

// const myNum = [1,2,3,4,5]
// const newNum = myNum.reduce(function(acc,cur){
//     console.log(`Acc:${acc}, curVal:${cur}`);
    
//     return acc+cur

// },1)
// console.log(newNum)

const shoppingCart = [
    {
        itemname: "Item 1",
        price:1999
    },
    {
        itemname:"Item 2",
        price:2399
    },

    {
        itemname: "Item 3",
        price:799
    },
    {
        itemname:"Item 4",
        price:8999
    }
]

const priceToPay =shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay);
