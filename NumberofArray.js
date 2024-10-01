let n = prompt("Enter a number");
let Arr = [];
for (let i = 0; i < n; i++) {
    Arr [i] = i+1;
}
console.log(Arr);
 let sum = Arr.reduce((res, curr) => {
    return res + curr;
 });
 console.log("Sum of all element of array is ", sum);

 let product = Arr.reduce((pre, curr) => {
    return pre * curr;
 });
 console.log("Product of all element in array is",product);
 
 