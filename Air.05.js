function calcul(tableau) {
  if (tableau.length > 2) {
    let tableauResultat = [];
    for (let i = 0; i < tableau.length - 1; i++) {
      let resultat = tableau[i] + tableau[tableau.length - 1];
      tableauResultat.push(resultat);
    }
    console.log(tableauResultat);
  } else {
    console.log("doit contenir deux éléments minimum ");
  }
}

const liste1 = [1, 2, 3, 4, 5, +2];
const liste2 = [10, 11, 12, 20, -5];

calcul(liste1);
calcul(liste2);
