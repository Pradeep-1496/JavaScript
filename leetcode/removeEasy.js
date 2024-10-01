let nums = [0,1,2,2,3,0,4,2], val = 2;
let pre = nums.length;
for(let i =0; i<nums.length; i++){
    if(nums[i] === val){
        nums.splice(i,1);
        i--;
    }
}
let post = nums.length;
var diff = pre-post;
let nums2 = [];
if(diff != 0){
    for(let k =0; k<diff; k++){
        nums2[k]="_";
    }
}
console.log(`${post}, nums = [${nums.concat(nums2)}]`);