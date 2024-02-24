
// This inside an Object 
const user = {
    name: "Tom",
    price : 0,
    message : function(){
        console.log(`${this.name}, welcome to JS`);
        // console.log(this);
    }
}
// user.name = "Sam"
// user.message()

// This outside 
// let a = "Present in global area"
// console.log(this);

// This inside a function cannot access the variables like in Object 
function hel(){
    const mes = "Welcome to Hell"
    // console.log(this.mes);
    console.log(this);
}
hel()

