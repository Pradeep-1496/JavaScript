let marks = [85, 97, 44, 37, 76, 60];
let sum=0;
for(let vel of marks){
    sum += vel;
}
let avg = sum/marks.length;
console.log(`Average of marks is ${avg}`);