// const prompt = require("prompt-sync")();
// function compteurVoyelles(chaine) {
//   let compteur = 0;

//   for (let i = 0; i < chaine.length; i++) {
//     let lettre = chaine[i];
//     if (
//       lettre.toLowerCase() === "a" || lettre.toLowerCase() === "e" || lettre.toLowerCase() === "i" || lettre.toLowerCase() === "o" || lettre.toLowerCase() === "u"
//     ) {
//       compteur++;
//     }
//   }

//   return compteur;
// }

// console.log(compteurVoyelles(prompt("entrez mot : ")));
const prompt = require("prompt-sync")();
function compteurVoyelles(chaine) {
  
    let compteur = 0;

  for (let i = 0; i < chaine.length; i++) {
    let lettre = chaine[i].toLowerCase() ;
    if (
      lettre === "a" || lettre=== "e" || lettre === "i" || lettre=== "o" || lettre === "u"
    ) {
      compteur++;
    }
  }
console.log("Sortie :")
  return compteur;
}
console.log(compteurVoyelles(prompt("Entrée : " )));
