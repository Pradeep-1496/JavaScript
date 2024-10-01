const divide = (divident, divisor) => {
  var result = 0;
  var sign;
  // if both negative
  if (divident < 0 && divisor < 0) {
    divisor = 0 - divisor;
    divident = 0 - divident;
    sign = 1;
  }
  // check individual
  if (divident < 0) {
    divident = 0 - divident;
    sign = -1;
  } else if (divisor < 0) {
    divisor = 0 - divisor;
    sign = -1;
  }
  // divide
  while (divident >= divisor) {
    divident -= divisor;
    result++;
  }
  return sign < 0 ? -result : result;
};
console.log(divide(10, 3));
