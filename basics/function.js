function addTwoNumbers(a,b){
    return a+b
}
// console.log( addTwoNumbers(33,22))

// default value of parameters
function addTwoNumbersDefault(a = 99,b = 1){
    return a+b
}
// console.log(addTwoNumbersDefault());


// undefined case i.e if you do not pass the parameter value
function name(myName){
    console.log(`My name is ${myName}`);
}
// name();

//If you want to take multiple arguments inside the function
function prices(value1,value2,...value){
    return value
}
// console.log(prices(12,11,44,33,22,11));


// Handle Object inside the function 
const obj1 = {
    name: "robert",
    age : 98
}
function objHandler(obj1Para){
    console.log(`${obj1Para.name} is my name and I am ${obj1Para.age} yrs old.`);
}

// objHandler(obj1)


// Directly passing Object Values 

// objHandler({name:"Tommy",age:24})


// Array inside a Function 

let arr = [5,4,66,3,2,1]
function arrHandler(arrPara){
    console.log(`Array values are ${arrPara}`);
    console.log(arrPara);
}
// arrHandler(arr)