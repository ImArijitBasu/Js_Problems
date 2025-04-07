function staircase(n, i = 1) {
    if (i > n) return;
    console.log(" ".repeat(n - i) + "#".repeat(i));
    staircase(n, i + 1);
}
staircase(10)
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
    let maxSum = arr.slice(1, 5).reduce((a, b) => a + b, 0);
    
    console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);

function birthdayCakeCandles(candles) {
    // Write your code here
    let big= Math.max(...candles)
    let count = candles.filter(candle => candle === big).length; 
    console.log(count);

}
birthdayCakeCandles([3, 2, 1, 3])

function timeConversion(s) {
    // Write your code here
    const AMPM = s.slice(-2)
    console.log(AMPM);
    let [hours, minutes, seconds] = s.slice(0, -2).split(":"); 
    if(AMPM === "AM" && hours === 12){
        hours = "00";
    }
    else if(AMPM === "PM" && hours !== 12){
        hours = String(Number(hours) + 12);
    }
    return `${hours}:${minutes}:${seconds}`;

}
console.log(timeConversion("07:05:45PM"));