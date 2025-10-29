const prompt = require("prompt-sync")();
const n = +prompt("number : ");
function Num(n){
    if (n<=1){
        return 1 ;
    }
    let a = 1 ;
    let b = 1 ;
    for (let i=2 ; i<=n;i++){
        let som =  a+b ;
        a=b;
        b=som ;
    }
    return b ;
    
}
console.log (Num(n));