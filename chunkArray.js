function chunk(arr , size){
    const newArr = [];
    for(let i =0; i< arr.length; i += size){ //increment as per size (if size is 2 , it will increment 2)
        newArr.push(arr.slice(i , i + size))
    }
    return newArr;
}

console.log(chunk([1,3,5,12,54,1,3,4] , 50));