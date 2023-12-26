const prompt = require("prompt-sync")(); // Cette ligne permet d'autoriser prompt sur Visual Studio Code

function decoupage(chaineACouper) {
  if (typeof chaineACouper !== "string") {
    console.error("L'élément saisi n'est pas une chaîne de caractères");
    process.exit(1);
  }

  let tableau = chaineACouper.split(" ");

  if (tableau.length <= 2 || typeof tableau[2] !== "string") {
    console.error(" Le séparateur à l'index 2 n'est pas valide");
    process.exit(1);
  }

  let separateur = tableau[2];
  let indexSeparateur = chaineACouper.indexOf(separateur);

  if (indexSeparateur === -1) {
    console.error("Le séparateur n'est pas présent dans la chaîne");
    process.exit(1);
  }

  let partie1 = chaineACouper.slice(0, indexSeparateur + separateur.length);
  let partie2 = chaineACouper.slice(indexSeparateur + separateur.length);

  return partie1 + "\n" + partie2;
}

let chaineACouper = "Crevette magique dans la mer des étoiles";
let resultat = decoupage(chaineACouper);

console.log(resultat);
