// we can declare two types of obj literals and obj single ton

// Obj literals

let user={
    name:"shravu",  // key value pairs
    age:21,
    email:"abc@gmail.com",
    city:"Ich",
    isLogin:true,
    lastLoginDay:['Mon','Tues'],
    "Full Name":"Shravani Magdum" // this is not the proper way to give value
};
// console.log(user);
// console.log(user.email);
// console.log(user.lastLoginDay);
// console.log(user["Full Name"]); 

// user.email="pqr@gmail.com";
// console.log(user.email);

// Object.freeze(user); // locks the objects and doesnt make any modifications even if we change it
// user.email="xyz@gmail.com";
// console.log(user.email);

// Symbol example interview que create a symbol and add in obj key and print the symbol

const mySymbol= Symbol('JS'); // simple way to declare symbo
const myObj={
    [mySymbol]:"JSWS"
}
console.log(myObj);
console.log(myObj[mySymbol]);
console.log(typeof(myObj));

// obj used in function

user.greeting=function(){
    console.log(user.greeting);
}











 