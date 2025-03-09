//todo:leetcode->2379

var minimumRecolors = function(blocks, k) {
    let minOps = Infinity;
    let whiteCount = 0;
    
    for(let i= 0; i< k;i++){
        console.log("block" ,blocks[i]);
        if(blocks[i] === 'W') whiteCount++;
    }
    console.log("doneeeee");
    minOps = whiteCount
    for(let i = k;i< blocks.length; i++){
        console.log("length of blocks" , blocks.length , blocks[i-k] , blocks[k]);
        console.log("blocks" ,blocks[i]);
        if(blocks[i-k] === 'W') whiteCount--;
        console.log("whitecount" , whiteCount);
        if(blocks[i] === 'W') whiteCount++;
        console.log("whitecount2" , whiteCount);
        minOps = Math.min(minOps , whiteCount)
        console.log("minOps",minOps);
    }
    console.log(minOps);
};
console.log(minimumRecolors("WBBWWBBWBW", 7));