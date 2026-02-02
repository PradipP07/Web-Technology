//Array max element
let a1= [1, 2, 3, 6, 1, 7];
let max= 0;
for(let i=0; i<a1.length; i++){
    for(let j=i+1; j<a1.length; j++){
        if(a1[i]>a1[j]){
            max= a1[i]
        }else{
            max= a1[j]
        }
    }
}
console.log(max)

//Removng Duplicates
let a2 = [1, 3, 2, 1, 2, 4];
let k = 0;
for(let i = 0; i < a2.length; i++){
    let found = false;
    for(let j = 0; j < k; j++){
        if (a2[i] == a2[j]) {
            found = true;
            break;
        }
    }
    if(!found){
        a2[k] = a2[i];
        k++;
    }
}
a2.length = k;
console.log(a2);


//Missing number in array
let arr = [1, 2, 3, 5]
console.log(arr)
let n = arr[arr.length - 1]
let total = ( n * (n + 1)) / 2
let sum = 0

for(let i = 0; i< arr.length; i++){
    sum = sum + arr[i]
}
let no = total - sum
console.log("Missing no in array: " + no)