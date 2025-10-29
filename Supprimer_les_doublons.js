const prompt = require ("prompt-sync")();

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
impaire(tab);
function impaire(tab) {
    let arr = [];
  for (let i = 0; i < tab.length; i++) {
    let A = false ;
    for (let j = 0; j < arr.length; j++) {
      if (tab[i] === arr[j]) {
      A=true ;
      }
    }
    if (A==false){
      arr.push(tab[i])
    } 
  }
  console.log("Sortie  : ");
  console.log(arr);
}
