let nums = [1, 3, 4, 1, 2, 3, 1];
const frequency = [];
//populate the frequency array
for (let index = 0; index <= nums.length + 1; index++)
    frequency.push(0);
    const result = [];

for (let num of nums) {
  if (frequency[num] >= result.length)
    // Create new Row
    result.push([]);

  result[frequency[num]++].push(num);
}

    console.log(result);
    
