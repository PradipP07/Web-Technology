// objects in javascript

// we can declare two types of objects in javascript

// 1. Object Literal
// 2. Object Singalton


let users={
    name:"Pradip",
    age:30,
    city:"Ichalkaranji",
    email:"pradip2505@gmail.com",
    islogin:true,
    lastLoginDate:["Monday","Tuesaday"],
    fullName:"Pradip Patil"
};
console.log(users);

users.greeting=function(){
    console.log("Hello.js");
}

console.log(users.greeting());

users.greeting2=function(){
    console.log("Hello ${this.email}");
};
