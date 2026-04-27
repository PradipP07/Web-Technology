let a=10; // gives the same value ignoring the scope bloks updated value
var b=20; // gives the upadated value which is changed in the scope block

// Types of data : 1) Primitive and Non-Primitive

// scope block
{
    let a=200;
    var b=300;
    console.log(a,b);
}
console.log(a,b);

// Variable Declarations

let ID=10; // Number
let EmailId="pqrs123@gmail.com";// string
let userExit=true; //boolean
let name=""; //undefined means a variable is created but no value is given js gives it automatically
let num=null; // null means no value on purpose set it ourself

console.log(ID);
console.log(EmailId);
console.log(userExit);
console.log(name);
console.log(num);

// Check the datatype

console.log(typeof(ID));
console.log(typeof(EmailId));
console.log(typeof(userExit));
console.log(typeof(name));
console.log(typeof(num));