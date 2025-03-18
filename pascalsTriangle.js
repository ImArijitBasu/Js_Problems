var generate = function(numRows) {
    let res = [];
    for(let i =0; i<numRows; i++){
        let row = Array(i+1).fill(1);
        // console.log(row);
        for(let j =1;j<i;j++){
            console.log("value of i",i);
            console.log("value of j",j);
            row[j] = res[i-1][j] + res[i-1][j-1];
            // console.log(row[j]);
        }
        res.push(row);
    }
    return res;
};
console.log(generate(5));