// let a = 10
// const b = 20
// var c = 30

// if(true){
//     let a = 100
//     const b = 200
//     var c = 300
//     console.log(`Inside if: ${a}, ${b}, ${c}`);
// }

// console.log(`Outside if: ${a}, ${b}, ${c}`);


// Nested IIFE and scope concept
// (function func(){
//     let a = "A";
//     (function inFunc(){
//         let b = "B"
//         console.log(`Inside inFunc: ${b}`);
//     })()
//     console.log(`Inside func: ${a}`);
//     // inFunc()

// })()

// Expression 
console.log(sumTwo(10,15))
function sumTwo(n1,n2){
    return n1+n2
}

// you cannot use twoSum function before initiallising it if you are writting a function in this way 
// console.log(twoSum(22,11)); Wrong way 
let twoSum = function(n1,n2){
    return n1+n2
}
console.log(twoSum(22,11));