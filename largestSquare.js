//Google => https://www.youtube.com/watch?v=Ti5vfu9arXQ
// Practice for dynamic programming

function largestSquare(matrix){
    let rows = matrix.length;
    let cols = matrix[0].length;
    // console.log(rows , cols);
    //TODO: creates a array of lengths consists of 0;
    //! let dp = Array.from({length: rows})
    //! let dp = Array.from({length: rows} , () => Array(cols))
    let dp = Array.from({length: rows} , () => Array(cols).fill(0))
    //declare max size of the desired output
    let maxSize = 0;
    for(let i =0;i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(matrix[i][j]===1){
                if(i === 0 || j === 0){
                    dp[i][j] = 1;
                }
                else{
                    dp[i][j] = Math.min(dp[i-1][j] , dp[i][j-1] , dp[i-1][j-1]) + 1;
                }
                maxSize = Math.max(maxSize , dp[i][j]);
            }
        }
    }

    return maxSize;
}



let mat1 = [
    [0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];
console.log(largestSquare(mat1));