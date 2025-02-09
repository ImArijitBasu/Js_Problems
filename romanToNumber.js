function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        console.log(s[0]);
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];
        console.log(current);
        console.log(next);

        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}

console.log(romanToInt("MC")); 
console.log(romanToInt("CM")); 
// console.log(romanToInt("MCMXCIV")); 
