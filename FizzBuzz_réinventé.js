const prompt = require ("prompt-sync")();
const num = prompt("veullez saisir le nombre : ");
if (num%5==0 && num%3==0){
    console.log("TechLead");
}
else if (num%5==0){
    console.log("Lead");
}
else if (num%3==0){
 console.log("Tech");
}
else  {
    console.log(`${num}`);
}