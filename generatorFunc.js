var fibGenerator = function*() {
    let a=0,b=1;
    while(true){
        yield a;
        [a,b] = [b,a+b];
    }
};
const gen = fibGenerator();
console.log((gen.next()));
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 
//!A generator function in JavaScript (function*) allows you to pause and resume execution, producing a sequence of values lazily using the yield keyword.