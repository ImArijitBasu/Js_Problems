var canPartition = function (nums) {
  const sumOfNums = nums.reduce((acc, num) => acc + num, 0);
  console.log(sumOfNums);
  if (sumOfNums % 2 !== 0) return false;
  let target = sumOfNums / 2;
  console.log(target);
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  console.log(dp);
  for (let num of nums) {
    for(let i = target; i >= num; i--){
        dp[i] = dp[i] || dp[i - num];
    }
  }return dp[target]
};

canPartition([1, 2, 5, 6]);
