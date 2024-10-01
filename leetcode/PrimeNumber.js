let num = 100;
for (let a = 2; a < num + 1; a++) {
  for (let i = 2; i < a + 1; i++) {
    if (a == i) {
      console.log(a);
    } else if (a % i == 0) {
      break;
    }
  }
}
