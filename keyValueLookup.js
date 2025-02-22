function main(){
    const n = 3;
    const obj = {
        "key1" : 1,
        "key2" : 2,
        "key3" : 3,
    }
    const lookupKey = "key2"
    
    if (obj[lookupKey] !== undefined) {
        console.log(obj[lookupKey]);
      } else {
        console.log('Not Found');
      }
    
}
main()