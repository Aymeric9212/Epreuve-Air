function suppressionDoublon(tableau) {
    if (tableau.length === 0) {
        console.error("La saisie est vide");
        process.exit(1);
    }

    let tableauModifié = [];
    let caracterePrecedent = null;

    for (let i = 0; i < tableau.length; i++) {
        let indexEnCours = tableau[i];

        // Exclure les espaces du processus de comparaison et d'ajout
        if (indexEnCours.trim() !== caracterePrecedent) {
            tableauModifié.push(indexEnCours);
        }

        caracterePrecedent = indexEnCours.trim();
    }

    console.log("Voici la modification :");
    console.log(tableauModifié.join(""));
}

let phrase = "Hello milady, bien bien ou quoi ??";
let tableau = phrase.split("");
suppressionDoublon(tableau);
