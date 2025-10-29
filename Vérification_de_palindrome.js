
function isPalindrome(str) {

    
    const reversedStr = str.split('').reverse().join('');
    

    
    return str === reversedStr;
}


console.log(`"level" -> ${isPalindrome("level")}`); 
console.log(`"hello" -> ${isPalindrome("hello")}`); 
console.log(`"radar" -> ${isPalindrome("radar")}`);
console.log(`"test" -> ${isPalindrome("test")}`); 