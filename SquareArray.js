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
})

let newArr = arr.map((val) => {    //arr.map return new newArr 
    return val*2;   
})
console.log(newArr);