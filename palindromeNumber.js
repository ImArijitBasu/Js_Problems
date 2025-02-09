function isPalindrome(x){
    return x.toString() === x.toString().split("").reverse().join("")
}