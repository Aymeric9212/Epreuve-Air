function chercherNombresSansPaire(tableau) {
  if (tableau.length <= 0) {
    console.error("Le tableau est vide");
    process.exit(1);
  }

  let numerosDistincts = new Set();
  let numerosSansPaire = new Set();

  for (let i = 0; i < tableau.length; i++) {
    let numero = tableau[i];

    if (numerosDistincts.has(numero)) {
      numerosSansPaire.delete(numero);
    } else {
      numerosDistincts.add(numero);
      numerosSansPaire.add(numero);
    }
  }

  numerosSansPaire = Array.from(numerosSansPaire);

  if (numerosSansPaire.length > 0) {
    console.log("Les nombres sans paire sont : " + numerosSansPaire.join(', '));
  } else {
    console.log("Aucune paire trouvée");
  }
}

let liste1 = [5, 1, 2, 5];
chercherNombresSansPaire(liste1);
