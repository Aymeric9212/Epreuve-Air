let liste1 = ["Michel", "Albert", "Thérèse", "Benoit"];

function rotation(tableau) {
  if (tableau.length === 0) {
    console.error("Le tableau est vide ");
    process.exit(1);
  }
  for (let i = 0; i < tableau.length - 1; i++) {
    const premierIndex = tableau.shift();
    tableau.push(premierIndex);
  }
  return tableau;
}
console.log(rotation(liste1));
