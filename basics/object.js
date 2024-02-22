const sym = Symbol("Symbol1");
const jsObj = {
    name: "Sourabh",
    age: 24,
    "city":"Howrah",
    loc: "Howrah",
    isLoggedIn : false,
    [sym] : "Symbol-2",
    "state": "West Bengal"
}

// console.log(jsObj.name);
// console.log(jsObj.state);
// console.log(jsObj["state"]);
// console.log(jsObj.city);
console.log(jsObj[sym]);
console.log(typeof jsObj[sym]);
