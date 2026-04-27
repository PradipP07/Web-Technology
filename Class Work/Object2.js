// Single ton obj

const user=new Object(); // single ton obj
console.log(user);

const user2={}; //non-single ton obj
user2.name="shravani";
user2.age=21;
user2.city="ich";
console.log(user2);  

// nested obj

const regularUser={
    email:"abc",
    user:{
        fullName:{
            firstName:"Shravani",
            lastName:"Magdum"
        }
    }
}
console.log(regularUser);
console.log(regularUser.user.fullName.firstName);


