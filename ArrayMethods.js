let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = (val, idx) => {
    console.log(idx, val**2);   // num**2 = num^2
}
function cube(val){
    console.log(val**3);
    
}
arr.forEach(square); // Arrow function
arr.forEach(cube);   // Normal Function

// Each element of array pass through square function
arr.forEach((val) => {    //function call without define function (No name of function)
    console.log(val**4);
});

let newArr = arr.map((val) => {    //arr.map return new newArr 
    return val*2;   
});
console.log(newArr);

//Array Filter 
let newArr2 = arr.filter((val) => {
    return val%2 === 0;                //Array Filter for even number
});
console.log(newArr2);

// Array Reduce
let SumArr = arr.reduce((prev, val) => {
    return prev + val;
    } );
    console.log(`Sum of all array element is ${SumArr}`);    

let maxArr = arr.reduce((prev, cur) => {
    return (prev > cur) ? prev : cur;               // (condition)? trueStatement : falseState
})

console.log(`Maximum number in array is ${maxArr}`);
