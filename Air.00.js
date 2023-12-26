const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function decoupage(chaineACouper, separateur) {
  if (typeof chaineACouper !== "string" || typeof separateur !== "string") {
    console.error("La chaine saisies n'est pas valide");
    process.exit(1);
    return;
  }
  let tableau = [];
  let memoire = "";
  for (let i = 0; i < chaineACouper.length; i++) {
    let caractere = chaineACouper[i];

    if (caractere === separateur) {
      tableau.push(memoire);
      memoire = "";
    } else {
      memoire += caractere;
    }
  }
  if (memoire !== "") {
    tableau.push(memoire);
  }

  return tableau;
}
let chaineACouper = "Bonjour les gars";
const separateur = " ";
console.log(decoupage(chaineACouper, separateur).join("\n"));
