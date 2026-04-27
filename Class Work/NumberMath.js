const balance=new Number(123456789653);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2)); // when we built will E-Commerce websites and precisions value is so long then we use toFixed.
console.log(balance.toString().length); // toString() method converts number into string and then length property counts the number of characters in that string
console.log(balance.toLocaleString()); // it adds commas in between the numbers for better readability
console.log(balance.toLocaleString('en-IN')); // When we want Indian Currency then this method is used

// Math Operations

console.log(Math);
console.log(Math.abs(-4)); // abs converts negative value into positive value and positive will be positive
console.log(Math.floor(4.6)); // choose lowest value
console.log(Math.ceil(4.6)); // chooses top value
console.log(Math.round(4.6)); // rounds off the value to nearest integer
console.log(Math.sqrt(16)); // square root
console.log(Math.min(1,2,3,4,5,6)); // returns the minimum value
console.log(Math.max(1,2,3,4,5,6)); // returns the maximum value
console.log(Math.random()); // returns random value between 0 to 1
console.log(Math.random()*10); // returns random value between 0 to 10








