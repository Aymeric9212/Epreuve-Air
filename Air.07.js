function trieCroissant(tableau) {
  return tableau.sort(function (a, b) {
    return a - b;
  });
  console.log(tableau);
}

liste1 = [1, 3, 4, 2];
liste2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 33];

const liste1Triee = trieCroissant(liste1).join(" ");
console.log(liste1Triee);

const liste2Triee = trieCroissant(liste2).join(" ");
console.log(liste2Triee);
