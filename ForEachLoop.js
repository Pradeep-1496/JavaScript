// arr.forEach((val, idx, arr) => {   we can pass  val = values of array, idx = index of array, array 
//     console.log(idx, val, arr);           
// })


let arr = [1, 2, 3, 4, 5];
arr.forEach((val, idx) => {
    console.log(idx, val*2);
})
let city = ["ahmedabad", "pune", "mumbai", "delhi"];
city.forEach((val, idx) => {
    console.log(idx, val.toUpperCase());
})