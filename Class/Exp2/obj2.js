// singleton object

// non singleton object
const users=new Object();
console.log(users);

const user2=new Object();
user2.id="401"
user2.name="Pradip";
user2.city="Ichalkaranji";
user2.age="20";

console.log(user2);

// object inside obj
const regularUser = {
    email: "abc@gmail.com",
    user: {
        userFullName: {
            firstName: "Pradip",
            lastName: "Patil"
        }
    }
};

console.log(regularUser);

