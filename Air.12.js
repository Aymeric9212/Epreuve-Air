function quickSort(tableau) {
  if (tableau.length <= 1) {
    return tableau;
  }
  const pivot = tableau[0];
  const gauche = [];
  const droite = [];

  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < pivot) {
      gauche.push(tableau[i]);
    } else {
      droite.push(tableau[i]);
    }
  }
  return quickSort(gauche).concat(pivot, quickSort(droite));
}

let a = [6, 5, 4, 3, 2, 1];

console.log(quickSort(a));
