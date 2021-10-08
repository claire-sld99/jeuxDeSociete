let prixADeviner = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

let devinez = () => {
    let prixSaisie = document.querySelector("#prixSaisi");
    
    console.log(prixADeviner);
    console.log(prixSaisie);
        if (prixSaisie > prixADeviner) {
            console.log("C'est moins !");
        }else if (prixSaisie < prixADeviner) {
            console.log("C'est plus !");
        }else{
            console.log("C'est GAGNE !");
        }
}


for (let nbVie = 10; nbVie > 0; nbVie--) {
    devinez();
}
