const prompt = require("prompt-sync")();
let tab = [];
console.log("entre your numbers one  by one .");
console.log("when you are finished type 'stop' ");
let v =true
while(true){
    let input = prompt("enter a number (or 'stop' to finish ) : ");
    if (input.toLowerCase() === "stop"){
        break;}
    let number =+input;
    tab.push(number);
    v=false}
console.log("Entrée  : ");
console.log(tab);
let s = 0 ;

for(let i=0;i<tab.length;i++) {
   if(tab[i]<0) { 
    break;
   }
 
    s = s + tab[i];
  
   
}
 console.log("Sortie  : ");
 console.log(s);