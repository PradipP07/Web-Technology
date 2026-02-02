//Even Odd
function even(a){
    if(a %2 == 0){
        console.log("Number is Even")
    }
    else{
        console.log("Number is odd")
    }
}

even(2)

//sum of ele in array
function sumarr(arr){
    let sum = 0
    for( let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum)
}
let arr = [1, 2, 3, 4, 9]
sumarr(arr)