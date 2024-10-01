let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];
addTwoNumbers(l1, l2);
function addTwoNumbers(l1, l2) {
  let l1s = Number(l1.join(""));
  let l2s = Number(l2.join(""));
  let Sum = (l1 + l2).toString().split("").reverse();
  console.log(Sum);
  return Sum;
}
