var findTheDifference = function(s, t) {
    let result =0;
    for(let char of s){
        result ^= char.charCodeAt(0)
        console.log("result s",result);
    }
    for(let char of t){
        result ^= char.charCodeAt(0)
        console.log("result t",result);
    }
    console.log(String.fromCharCode(result));
    return String.fromCharCode(result);
};

findTheDifference("abcd" , "abcde")