// To execute a function immediately initiallising it, we will use IIFE 
// To avoid global scope pollution

(function one(){
    console.log(`Named IIFE`);
})();

(()=>console.log(`UnNamed IIFE`))();

// Pass argument inside a IIFE function 

((name,age)=>console.log(`My name is ${name} and I am ${age}yrs old.`))("Sourabh",24)