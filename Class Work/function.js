function myFunction() {
    console.log(10+5);
}
myFunction();

function myFunction2(x, y) {
    let result=x+y;
    return result;
    console.log("Hello" ); // in function after return will not be executed hence this line is not printed
}
console.log(myFunction2(1,2));

function myFunction3(name){
    return `${name} user logged in`;
}
// console.log(myFunction3("Shravani"));
console.log(myFunction3()); // when string is not passed it gives undefined

function myFunction4(...num1) // spread operator it gives output in array form
{ 
    return num1
}
console.log(myFunction4(5,4,8)); // when second parameter is not passed it gives undefined

// Arrow function
const myFunction5=(a)=> // in nowadays industry level arrow function is used 
{
    return a
}
console.log(myFunction5(10));

// this keyword story
function myFunction6() {
    userName="shravani"; // when let keyword is used with this it gives the output as undefined 
    console.log(this); // in simple function this keyword gives the global object means all the properties and methods of window object
}
myFunction6(); 

// Arrow function this keyword story
const myFunction7=()=> {
    userName1="magdum";
    console.log(this); // in arrow function this kwyword is not used because it gives empty curly braces means 
}
myFunction7();