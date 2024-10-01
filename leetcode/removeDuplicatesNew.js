var removeDuplicates = function (nums) {
  let pre = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        nums.splice(j, 1);
        i--;
      }
    }
  }
  len = pre - nums.length;
  for (let i = nums.length; i < pre; i++) {
    nums[i] = "_";
  }
  return nums;
};
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
