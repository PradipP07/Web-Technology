// String declaration
// this is a good way now we can use this way
// String interpolation

let str='JS'
console.log(`Hello my course Name ${str}`); // string interpolation 

const gameCount=new String("JSCWC"); // use new keyword to crate obj

// string methods
console.log(gameCount.length); // gives length of string
console.log(gameCount[4]); // gives the 4th position letter
console.log(gameCount.toUpperCase()); // converts into uppercase
console.log(gameCount.toLowerCase()); // converts into lowercase
console.log(gameCount.charAt(4)); // gives character at 4th position
console.log(gameCount.indexOf('S')); // gives index of the character

const fname="   Shravani   ";
console.log(fname);
console.log(fname.trim()); // removes the extra spaces

// inclues,split

console.log(gameCount.includes('WC')); // checks whether the given string is present or not and gives boolean value

console.log(gameCount.split('C')); // splits the string into array and gives the output in array form









