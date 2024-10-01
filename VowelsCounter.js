// normal function
function Vowels(str) {
  count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(`Normal Function "${str}" have ${count} Vowels in it`);
}
// Arrow Function
const ArrowConsonant = (str) => {
  count = 0;
  for (let char of str) {
    if (
      char != "a" &&
      char != "e" &&
      char != "i" &&
      char != "o" &&
      char != "u"
    ) {
      count++;
    }
  }
  console.log(`Arrow Function "${str}" have ${count} Consonant in it`);
};
let str = prompt("Enter your string");
Vowels(str);
ArrowConsonant(str);
console.log(`"${str}" have length of ${str.length}`);
