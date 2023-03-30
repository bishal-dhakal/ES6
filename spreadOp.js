// const add = (a,b,c) => console.log(a+b+c)
// var arrIn = [1,2,3];
// add.apply(null, arrIn);

//passing argument => spread operate. 

const add = (a,b,c) => console.log(a+b+c)

var arrIn = [1,2,3];
add(...arrIn);

//concat 2 array
let arr1 =[1,2,3];
//let arr2 =[7,8,9];

// arr1 = [...arr1,...arr2];
// console.log(arr1);



let arr2 =[...arr1,4,1,1,1,1,1,5,...arr1,7,8,9];

console.log(arr2);
