let nums1 = [3],
  nums2 = [-2, -1];
arr = nums1.concat(nums2);
// sortrr
for (let j = 0; j < arr.length - 1; j++) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      // swap
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
  }
}
let mid;
//odd
if (arr.length % 2 != 0) {
  mid = Math.floor(arr.length / 2 + 1);
  result = parseFloat(arr[mid - 1]).toFixed(5);
}
//even
else {
  mid = Math.floor(arr.length / 2);
  result = parseFloat((arr[mid] + arr[mid - 1]) / 2).toFixed(5);
}
console.log(arr, result);
