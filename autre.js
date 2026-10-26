let client = "Awa";
let codePlat = 9;
let quantiteSaisie = "30";
let montantVerse =4000;

let quantite = Number(quantiteSaisie);
let nomplat="i"
let prixUnitaire = 0;

switch(codePlat) {
    case 1:
        nomplat = "Attiéké-poissons";
        prixUnitaire = 1500;
        break;
    case 2:
        nomplat = "riz-poulet";
        prixUnitaire = 2000;
        break;
    case 3:
        nomplat = "aloco-oeuf";
        prixUnitaire = 1000;
        break;
    default:
        console.log("code plat invalide.")
}
function calculerTatal (prixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
let TotalAPayer = calculerTatal(prixUnitaire, quantite);
console.log(`Client : §{Client}`);

for (let i= 1; i <= quantite; i++) {
    console.log(`portion ${i} : ${nomplat} - ${prixUnitaire} FCFA`);
}

console.log (`TotalAPayer : ${TotalAPayer} FCFA`);

if (montantVerse >= TotalAPayer) {
    let monnaie = montantVerse - TotalAPayer;
    console.log (`monnaie : ${monnaie} FCFA`);
} 
else ( montantManquant = TotalAPayer - montantVerse);{
    console.log(`montant manquant : ${TotalAPayer - montantVerse} FCFA`);
    
}


