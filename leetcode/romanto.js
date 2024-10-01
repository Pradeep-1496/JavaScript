// roman to integer?
function romanToInteger(s) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    const currentRomanValue = romanValue[s[i]];
    const nextRomanValue = romanValue[s[i + 1]];
    if (currentRomanValue < nextRomanValue) {
      integer += nextRomanValue - currentRomanValue;
      i++;
    } else {
      integer += currentRomanValue;
    }
  }
  return integer;
}

console.log(romanToInteger("V"));
