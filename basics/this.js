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
let a = "Present in global area"
console.log(this);