const sym = Symbol("Symbol1");
const jsObj = {
    name: "Sourabh",
    age: 24,
    "city":"Howrah",
    loc: "Howrah",
    isLoggedIn : false,
    [sym] : "Symbol-2",
    "state": "West Bengal",
    greet : function(){
        console.log(`Good Morning, ${jsObj.name}`);
    }
}

// console.log(jsObj.name);
// console.log(jsObj.state);
// console.log(jsObj["state"]);
// console.log(jsObj.city);
// console.log(jsObj[Object(sym)]);
// console.log(typeof jsObj[Object(sym)]);

// to change the value of any key
jsObj.loc = "Kolkata"
// console.log(jsObj.loc);

// To freeze the values of your object key's, use freeze method
// Object.freeze(jsObj)
// jsObj.age = 21
// console.log(jsObj.age);


jsObj.greeting = function(){
    console.log(`Hello there ${jsObj.name}`);
}

// console.log(jsObj.greeting());
// console.log(jsObj.greet());


// Initialising Object using Singleton method
const obj1 = new Object()
obj1.a = 1
obj1.b = 2
obj1.c = true

// console.log(obj1);

//To get all the keys of an Object as an array

// console.log(Object.keys(obj1));


//To get all the values of an Object as an array

// console.log(Object.values(obj1));


//To get key,values pair as a array of an Object

// console.log(Object.entries(obj1));

//To check if the object contains any key or not

// console.log(obj1.hasOwnProperty("c"));
// console.log(obj1.hasOwnProperty("d"));


// Object inside another Object 

let obj2 = {
    email: "Sourabh@gmail.com",
    fullname : {
        tittle : "Singh",
        innerObj2: {
            firstName: "Sourabh",
            MiddleName : "Kumar"
        }
    }
}

// console.log(obj2.fullname.tittle);
// console.log(obj2.fullname.innerObj2.MiddleName);

// In order to combine two or more Objects

Object.assign(obj1,obj2);
const resObj = Object.assign({},obj1,obj2,jsObj);
// console.log(obj1);
// console.log(resObj);

const newRes = {...obj1,...obj2}
// console.log(newRes);

// Object inside Arrays

let arr = [
    {
        id: 1,
        name:"a"
    },
    {
        id: 2,
        name:"b"
    },
    {
        id: 3,
        name:"c"
    },
    {
        id: 4,
        name:"d"
    }
]

// console.log(`Id is ${arr[0].id} and name is ${arr[0].name}`)
// console.log(`Id is ${arr[2].id} and name is ${arr[2].name}`)



const q = {
    firstName : "Sammy",
    LastName : "Singh"
}

//If you are using a key several times then better to use

const {firstName} = q
const {LastName} = q

// console.log(firstName)
// console.log(LastName)

const {firstName : name1} = q
const {LastName : name2} = q

// console.log(name2);
// console.log(name1);

