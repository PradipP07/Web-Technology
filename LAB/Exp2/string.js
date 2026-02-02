/*Reverse string*/
let number = 123
console.log(number)
let num= 0
let rem = 0
while(number> 0){
    rem = number % 10
    number = Math.floor(number / 10)
    num = (num * 10) + rem
}
console.log(num)

/* Pallindromic*/
let number1 = 121
let temp = number1
console.log(number1)
let num1= 0
let rem1 = 0
while(number1> 0){
    rem1 = number1 % 10
    number1 = Math.floor(number1 / 10)
    num1 = (num1 * 10) + rem1
}
console.log(num1)
if(temp== num1){
    console.log("Nummber is Pallindromic")
}else{
    console.log("Number is not pallindromic")
}

/* Vowel Count*/
let str = "Aeiouguud"
console.log(str)
str= str.toLocaleLowerCase()
let count= 0
for( let i=0; i<str.length; i++){
    if(str[i].includes("a") || str[i].includes("e") || str[i].includes("i") || str[i].includes("o") || str[i].includes("u")){
        count++
    }
}
console.log(count)


/* Fibonacci Series*/
let n=10
let a= 0
let b= 1
console.log(a)
console.log(b)

for(let i=2; i<n; i++){
    let c= a+b
    console.log(c)

    a=b
    b=c
}
