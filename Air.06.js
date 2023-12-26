function listetriee(tableau) {
  if (!Array.isArray(tableau) || tableau.length === 0) {
    console.error(
      "Le tableau ne possède pas assez d'arguments ou est invalide."
    );
    process.exit(1);
    return;
  }

  let tableauFiltre = [];
  let caractereDeTrie = tableau[tableau.length - 1];

  if (typeof caractereDeTrie !== "string") {
    console.error("Le dernier élément du tableau n'est pas valide.");
    process.exit(1);
    return;
  }

  caractereDeTrie = caractereDeTrie.toLowerCase();

  for (let i = 0; i < tableau.length - 1; i++) {
    if (
      typeof tableau[i] === "string" &&
      !tableau[i].toLowerCase().includes(caractereDeTrie)
    ) {
      tableauFiltre.push(tableau[i]);
    }
  }

  console.log(tableauFiltre);
}

const liste1 = ["Michel", "Albert", "Thérèse", "Benoit", "t"];
const liste2 = ["Michel", "Albert", "Thérèse", "Benoit", "a"];
listetriee(liste1);
listetriee(liste2);
