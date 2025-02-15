function main(){
    const s = "madam";
    const reStr = s.split('').reverse().join('');

    if(s === reStr){
        console.log("Yes");
    }else{
        console.log("No");
    }
}

main()