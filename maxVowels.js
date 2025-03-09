var maxVowels = function(s, k) {
    let vowels = new Set(['a' , 'e' , 'i' , 'o' ,'u'])
    let maxCount = 0;
    let vowelCount = 0;

    for(let i = 0; i< k; i++){
        if(vowels.has(s[i])) vowelCount++;
    }
    maxCount = vowelCount;
    for(let i = k; i< s.length; i++){
        if(vowels.has(s[i-k])) vowelCount--;
        if(vowels.has(s[i])) vowelCount++;
        maxCount = Math.max(maxCount,vowelCount);
    }
    return maxCount;
}
maxVowels()