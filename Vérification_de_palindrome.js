const prompt = require("prompt-sync")();
function isPalindrome(str) {

    
    const reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
}

const V = prompt("entrez mot : ");
console.log( `${V}-> ${isPalindrome(V)}`); 