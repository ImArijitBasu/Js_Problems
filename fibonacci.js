// function fibonacci(n){
//     const fib = [0,1];
//     let sum = 1;
//     for(let i = 2; i<n;i++){
//         fib[i] = fib[i-1] + fib[i-2];
//         sum += fib[i]
//         console.log(fib[i]);
//         console.log("sum" , sum);
//     }
//     return sum
// }

// console.log(fibonacci(4));

function fib(n){
    if(n===0) return 0;
    if(n===1) return 1;

    let a = 0 , b=1;
    for(let i = 2; i<=n;i++){
        let temp = a+b;
        a=b;
        b=temp;
    }
    return b;
}
console.log(fib(0));