let myArr=[0,1,2,3,4];
console.log(myArr);

let myArr1=[0,1,2,3,"abc"];
console.log(myArr1);

const Arr=new Array(0,10,2,3,4); //why we declare this type array
console.log(Arr[1]);

// Array methods
Arr.push(5);
console.log(Arr); // add value at array

Arr.pop(5)
console.log(Arr); // Delete element from array

Arr.shift(); // It removes first element
console.log(Arr);

Arr.unshift(9);
console.log(Arr); // It shift all element and add on 1st position

console.log(Arr.includes(9)); // checks element is present or not

console.log(Arr.indexOf(10)); //gives index position

console.log(typeof(Arr)); // checks type of Arr

const newArr=Arr.join();
console.log(newArr);  // converts into string

console.log(typeof(newArr));






