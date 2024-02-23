let arr = [0,1,2,3,4]


// Way to insert from last
// arr.push("hello")
// console.log(arr);



// Way to delete the last element
// arr.pop()
// console.log(arr);


// Way to delete any specific value from an arrray using splice Method
splicedVal = arr.splice(2,1)
// console.log(arr);
// console.log(splicedVal);

// Way to add element at any specific index using splice Method
arr.splice(2,0,2)
// console.log(arr);

// Way to insert from start
arr.unshift(99)
// console.log(arr);


// Way to delete the first element
arr.shift()
// console.log(arr);

// Value present in array 
// console.log(arr.includes(9));


// To get the index of any element 
// console.log(arr);
// console.log(arr.indexOf(3));

// To get the array elements in a string format 
const arr1 = arr.join()
// console.log(arr1);
// console.log(typeof arr1);

// To make array of each character of a string 
// console.log(Array.from("Sourabh"));

// To make a array of keys or values of an Object 
// Wrong method 
// console.log(Array.from({name:"Anshu"}));

// Right way 
const obj = {
    name:"Soummy"
}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// Slicing and Splicing Method 
// console.log(`Before ${arr}`);
// console.log("A ",arr);
const arr2 = arr.slice(1,3)
// console.log(`After slice ${arr} and the sliced array value ${arr2}`);
// console.log("B ",arr2);
// console.log("A ",arr);

const arr3 = arr.splice(1,4,"Deleted elements after 0")
// console.log("C ", arr3);
// console.log("A ",arr);

arr.splice(1,1,1,2,3,4)
// console.log(arr);


const iplTeam = ["kkr","mi","csk","rcb"]
const islTeam = ["mb","eb","mc","kb"]

// Way to concat two or more arrays 
const team = iplTeam.concat(islTeam)
// console.log("Team: ",team);

// Or use ...Method 
const newTeam = [...iplTeam,...islTeam]
// console.log("New Team: ",newTeam);

// Arrays inside arrays, then how to make the elements all inside a single array 
let a = [1,2,3,[4,5,56,43], [6,5,4,[33,22,11,66]]]
// console.log("Before ",a);
let newA = a.flat(Infinity)
// console.log("After  ",newA);


