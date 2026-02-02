// objects in javascript

// we can declare two types of objects in javascript

// 1. Object Literal
// 2. Object Singalton


let users={
    name:"Suyog",
    age:30,
    city:"Sangli",
    email:"suyog2505@gmail.com",
    islogin:true,
    lastLoginDate:["Monday","Tuesaday"],
    fullName:"Suyog Pomdharane"
};
console.log(users);
// console.log(users.email)
// console.log("users.lastLoginDate:");
// console.log("users.[fullName]:",users.fullName);

// object.freeze(users);
// users.email="xyz@gmail.com";
// console.log(users);


// // symbol example

// constMysql=Symbol("Mysql");
// constMongodb=Symbol("Mongodb");




// let myObj1={
//     [constMysql]:"Mysql database",
// }
// console.log(myObj1);


// 
users.greeting=function(){
    console.log("Hello.js");
}

console.log(users.greeting());

users.greeting2=function(){
    console.log("Hello ${this.email}");
};
