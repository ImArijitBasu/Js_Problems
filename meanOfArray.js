var trimMean = function (arr) {
  console.log(arr);
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
  //find the 5%
  const fivePercent = Math.floor(arr.length * 0.05 )
  console.log(fivePercent);
  //remove the 5%
  let trimArr = arr.slice(fivePercent , arr.length - fivePercent);
  let mean = (trimArr.reduce((acc ,num)=> acc+num ,0))/trimArr.length;
  return mean
};

console.log(
  trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3])
);
