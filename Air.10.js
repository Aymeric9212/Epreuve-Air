const fs = require("fs");

function errorHandling(arguments) {
  if (arguments.length !== 2) {
    console.error("Error!");
    process.exit(1);
  }
}

function afficherContenu(nomFichier) {
  if (fs.existsSync(nomFichier)) {
    const contenu = fs.readFileSync(nomFichier, "utf-8");

    console.log(contenu);
  } else {
    console.error("Error: File not found!");
    process.exit(1);
  }
}

errorHandling(process.argv);

const fichierArg = "air.00.js";

afficherContenu(fichierArg);
