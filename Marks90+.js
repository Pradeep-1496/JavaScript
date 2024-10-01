// Filter Array of Marks above 90+ marks

let marks = [87, 95, 89, 99, 94, 58, 90, 100];
let FilArr = marks.filter(mark => {
  return mark > 90;
});
console.log("Filtered Array of marks is ", FilArr);
