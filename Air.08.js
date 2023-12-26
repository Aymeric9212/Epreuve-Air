function fusionTrie(tableau1,tableau2){
    const tableauFusion =[tableau1, tableau2]
    return tableauFusion.sort((a,b) => a-b)
}

let liste1 = [10,20,30]
let liste2 = [15,25,35]

const tableauFusionTriee = fusionTrie(liste1,liste2)
console.log(tableauFusionTriee.join(" "))
