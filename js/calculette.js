let calcul = "";

function ajouterAuCalcul(caractere) {

calcul += caractere

}



ajouterAuCalcul(8);

ajouterAuCalcul(+);

ajouterAuCalcul(4);



function calculer() {

console.log();

}


let operateur;

let remplirInputOperateur = () => {
    // let plus = document.querySelector("#opePlus").value;
    // let moins = document.querySelector("#opeMoins").value;
    // let multiple = document.querySelector("#opeMultiple").value;
    // let divise = document.querySelector("#opeDivise").value;
    operateur = document.querySelectorAll(".operateur").value;

    console.log(operateur);
}

let addition = (num1, num2) => {
    console.log(+num1 + +num2);
}

let soustraction = (num1, num2) => {
    console.log(+num1 - +num2);
}

let multiplication = (num1, num2) => {
    console.log(+num1 * +num2);
}

let division = (num1, num2) => {
    console.log(+num1 / +num2);
}

if (operateur == "+") {
    addition();
}else if (operateur == "-") {
    soustraction();
}else if (operateur == "*") {
    multiplication();
}else if (operateur == "/") {
    division();
}else{
    console.log("Wesh ta foirer");
}
