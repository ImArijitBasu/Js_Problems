var countOfSubstrings = function(word, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let left = 0, start = 0, count = 0;
    let vowelMap = new Map();
    let consonantCount = 0;

    for (let right = 0; right < word.length; right++) {
        if (vowels.has(word[right])) {
            vowelMap.set(word[right], (vowelMap.get(word[right]) || 0) + 1);
        } else {
            consonantCount++;
        }

        while (left < right && consonantCount > k) {
            if (vowels.has(word[left])) {
                vowelMap.set(word[left], vowelMap.get(word[left]) - 1);
                if (vowelMap.get(word[left]) === 0) {
                    vowelMap.delete(word[left]);
                }
            } else {
                consonantCount--;
            }
            left++;
            start = left;
        }

        while (vowels.has(word[left]) && vowelMap.get(word[left]) > 1) {
            vowelMap.set(word[left], vowelMap.get(word[left]) - 1);
            left++;
        }

        if (vowelMap.size === 5 && consonantCount === k) {
            count += (left - start) + 1;
        }
    }
    return count;
};

console.log(countOfSubstrings("ieaouqqieaouqq", 1));
