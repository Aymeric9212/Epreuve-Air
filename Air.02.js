const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function regroupage(tableau,separateur){
    if (!Array.isArray(tableau) || typeof separateur !== "string"){
        console.error("L'élément n'est pas un tableau ")
        process.exit(1)
    }
        if (tableau.length < 0) { 
            console.error("Le Tableau est vide")
            process.exit(1)
        }
    
    
    let string = tableau.join(" ")
  
 string= string.split(separateur).join(" ")
 return string
}
  tableau = ["je","teste","des","trucs"]
  let separateur = ","
  console.log(regroupage(tableau,separateur))
