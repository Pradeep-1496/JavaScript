let startTime = [1, 3, 2, 3],
  endTime = [3, 5, 4, 6],
  profit = [50, 40, 10, 70];
const jobs = new Array(profit.length);
for (let i = 0; i < jobs.length; ++i) {
  jobs[i] = [startTime[i], endTime[i], profit[i]];
}
console.log(jobs);
