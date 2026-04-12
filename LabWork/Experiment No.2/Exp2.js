// Reverse the Number
document.write("<h2>Experiment No.2</h2>");
document.write("---Activity 1---<br>");
let num=123;
let reversedNum=0;

while(num!==0){
    let digit=num%10;
    reversedNum=reversedNum*10+digit;
    num=Math.floor(num/10);
}

document.write("The Reversed number is=",reversedNum+"<br>");

// Check the given number is Palindrome or not

document.write("---Activity 2---<br>");
let num2=121;
let original=num2;
let reverseNum=0;

while(num2!==0){
    let digit2=num2%10;
    reverseNum=reverseNum*10+digit2;
    num2=Math.floor(num2/10);
}

if(original===reverseNum){
    document.write("It is a Palindrome Number.<br>");
}
else{
    document.write("It is not a Palindrome Number.<br>");
}

// Write a code for Fibonacci Series

document.write("---Activity 3---<br>");
let n=10;
let a=0,b=1;

document.write(a+"<br>");
document.write(b+"<br>");
for(let i=3;i<=n;i++){
    let c=a+b;
    document.write(c+"<br>");
    a=b;
    b=c;
}

// Find the largest Element in the array

document.write("---Activity 4---<br>");
let arr = [10, 45, 2, 89, 34];
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

document.write("Largest element is=", largest+"<br>");

// Remove duplicate element in array

document.write("---Activity 5---<br>");
let arr2=[1,2,3,2,4,1,5];
let unique=[];

for(let i=0;i<arr2.length;i++){
    if(!unique.includes(arr2[i])){
        unique.push(arr2[i]);
    }
}
document.write("Unique elements are: "+unique+"<br>");

// Find missing number in array

document.write("---Activity 6---<br>");
let arr3=[1,2,4,5,6];

for(let i=0;i<arr3.length;i++){
    if(arr3[i+1]!==arr3[i]+1){
        document.write("Missing Number is=",arr3[i]+1+"<br>");
        break;
    }
}

// reverse a string

document.write("---Activity 7---<br>");
let str="Hello";
let reversedStr="";

for(let i=str.length-1;i>=0;i--){
    reversedStr+=str[i]
}

document.write("Reversed string is=",reversedStr+"<br>");

// Count vowels in string

document.write("---Activity 8---<br>");
let str2="hello world";
let count=0;

str2=str2.toLowerCase();

for(let i=0;i<str2.length;i++){
    if(
        str2[i]==='a'||
        str2[i]==='e'||
        str2[i]==='i'||
        str2[i]==='o'||
        str2[i]==='u'
    ){
        count++;
    }
}
document.write("Total number of vowels are "+count+"<br>");

// Check palindrome in string 

document.write("---Activity 9---<br>");
let str3="madam";
let isPalindrome=true;

for(let i=0;i<str3.length/2;i++){
    if(str3[i]!==str3[str3.length-1-i]){
        isPalindrome=false;
        break;
    }
}

if(isPalindrome){
    document.write("It is a Palindrome String<br>");
}
else{
    document.write("It is NOT a Palindrome String<br>");
}

// The number is prime or not

document.write("---Activity 10---<br>");
let num3 = 7;
let isPrime = true;

if (num3 <= 1) {
    isPrime = false;
}

for (let i = 2; i <= num3 / 2; i++) {
    if (num3% i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    document.write("It is a Prime number<br>");
} else {
    document.write("It is NOT a Prime number<br>");
}

// Checking even or odd

document.write("---Activity 11---<br>");
function checkEvenOdd(num4) {
    if (num4 % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = 7;
document.write(number + " is " + checkEvenOdd(number)+"<br>");

// Write a code for sum of array

document.write("---Activity 12---<br>");
let arr4 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr4.length; i++) {
    sum += arr4[i];
}

document.write("Sum of array elements is: "+sum+"<br>");
