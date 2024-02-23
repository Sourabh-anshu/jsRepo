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

// Slicing and Splicing Method 
// console.log(`Before ${arr}`);
console.log("A ",arr);
const arr2 = arr.slice(1,3)
// console.log(`After slice ${arr} and the sliced array value ${arr2}`);
// console.log("B ",arr2);
// console.log("A ",arr);

const arr3 = arr.splice(1,4,"Deleted elements after 0")
// console.log("C ", arr3);
// console.log("A ",arr);


