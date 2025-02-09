function isValid(s) {
  const arr = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

//! console.log("s:", s);
  for (let char of s) {
    //! console.log("char:", char);
    if (char in pairs) {
        //! console.log(char);
        //! console.log("array:",arr);
        //! console.log("pair value:",pairs[char]);
      if (arr.length === 0 || arr.pop() !== pairs[char]) {
        //! console.log(arr.length);
        return false;
      }
    } else {
      arr.push(char);
    }
  }
  return arr.length === 0;
}
console.log(isValid("[]"));
