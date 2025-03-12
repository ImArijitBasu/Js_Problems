var countOfSubstrings = function(word, k) {
    let vowels = new Set(['a','e','i','o','u']);
    let left = 0;
    let count = 0;
    let vowelSet = new Set();
    let consonantCount = 0;

    for(let right = 0;right < word.length;right++){
        if(vowels.has(word[right])){
            vowelSet.add(word[right]);
        }
        else{
            consonantCount++;
        }
        while(consonantCount > k){
            if(vowels.has(word[left])){
                vowelSet.delete(word[left]);
            }else{
                consonantCount--;
            }
            left++;
        }
        if(vowelSet.size === 5 && consonantCount === k){
            count++;
        }
    }
    return count;
};
console.log(countOfSubstrings("ieaouqqieaouqq", 1));
