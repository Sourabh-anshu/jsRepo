
const one = ()=>{
    let name = "Sohaib"
    // console.log(this);
    console.log(this.name);
}

// one()


const twoSum = (n1,n2)=>{
    return n1+n2
}
// console.log(twoSum(2,1));


// Implicit Function 
const sumTwo = (n,m)=> n+m

// console.log(sumTwo(11,22));

// Return an OBject using Implicit 
let retObj = ()=>({name:"Wang",Age:24})
// console.log(retObj())

