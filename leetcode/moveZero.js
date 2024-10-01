let nums = [0,1,0,3,12];
const target = 0;
let pre = nums.length;
for(let i =0; i<nums.length; i++){
    if(nums[i] === target){
        nums.splice(i,1);
        i--;
    }
}
let post = nums.length;
var diff = pre-post;
let nums2 = [];
if(diff != 0){
    for(let k =0; k<diff; k++){
        nums2[k]=0;
    }
}
console.log(nums.concat(nums2));
