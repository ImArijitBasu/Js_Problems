var plusOne = function(digits) {
    let n = digits.length;
    for(let i = n-1 ; i>=0 ;i-- ){
        if(digits[i] < 9){
            digits[i] += 1
            return digits; 
        }
        digits[i] = 0;
    }
    return [1, ...digits]
};
console.log(plusOne([1,2,9]));