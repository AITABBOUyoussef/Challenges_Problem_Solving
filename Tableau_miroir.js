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
function tableauMiroir(tab) {
  let array = [];

  for (let i = 0; i < tab.length; i++) {
    array.push(tab[i]);
  }

  for (let i = tab.length - 1; i >= 0; i--) {
    array.push(tab[i]);
  }

  return array;
}

const array = tableauMiroir(tab);
console.log(`${array}`);
