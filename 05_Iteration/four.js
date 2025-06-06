// for itating object we use for in loop


const myObj ={
    game1: "Ironman",
    game2: "Efootball"
}

//for in loop
for (const key in myObj) {
      console.log(`${key} shortcut is for ${myObj[key]}`);
      
        
    }

 //for in loop in array
 
 const programming = ['js','java','c++']
 for (const key in programming) {
   console.log(programming[key]);
   
 }
