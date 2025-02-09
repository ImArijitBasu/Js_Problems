function memoize(fn) {
    const cache = {};
    let callCount = 0;
    
    function memoizedFunction(...args) {
        // Sort the arguments to ensure (3,1) and (1,3) are treated the same
        const sortedArgs = args.map(arg => Array.isArray(arg) ? arg.sort() : arg); 
        const key = JSON.stringify(sortedArgs);
        
        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        callCount++;

        return result;
    }

    // Attach the getCallCount method to the memoized function
    memoizedFunction.getCallCount = function() {
        return callCount;
    };

    return memoizedFunction;
}

// Sample functions
function sum(a, b) {
    return a + b;
}

function factorial(n) {
    return (n <= 1) ? 1 : (n * factorial(n - 1));
}

function fib(n) {
    return (n <= 1) ? 1 : (fib(n - 1) + fib(n - 2));
}

// Example usage
const memoizedSum = memoize(sum);
const memoizedFactorial = memoize(factorial);
const memoizedFib = memoize(fib);

