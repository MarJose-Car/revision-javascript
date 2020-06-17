// L'opérateur de omparaison " == " signifie "égal à"
// Il permet de vérifier que les VALEURS de 2 variables sont identiques

var nb1 = 123;
var nb2 = "123";

console.log(nb1 == nb2); // retourne TRUE

// L'opérateur de comparaison " === " signifie "strictement égal à"
// il permet de vérifier la VALEUR et le TYPE ( STRING, NUMBER ...)
console.log(nb1 === nb2); // retourne FALSE

// -- L' opérateur " != " signifie " DIFFÉRENT DE ...." en VALEUR
console.log(nb1 != nb2); // retourne FALSE

// -- L'opérateur " !== " signifie " STRICTEMENT DIFFÉRENT DE .... " en VALEUR et en TYPE
console.log(nb1 !== nb2);  // retourne TRUE

/* -----------------------------
             EXERCICES

J'arrive sur un espace sécurisé au moyen du prénom et de l'âge. Je dois saisir mon prénom et mon âge pour être authentifié sur le site (ces informations seront au préalable stokés dans des variables prenom et age). 
En cas d'échec, une alerte m'informe du problème. 
Si tout se passe bien, un message de bienvenue m'accueille.

                              --------------------------------*/


var prenom, age,
prenom = "Maria";
var age = 18;
/*
var prenom = prompt("Entrez votre prenom");
if(prenom = "Maria"){
    prompt("Entrez votre âge");
    if(age === 18) {
        alert("Bienvenue");
    }
} else {
    alert("Vos données ne sont pas correctes")
}

var prenom2 = prompt("Entrez votre prenom");
var age2 = parseInt(prompt('Entrez votre âge'));
if (prenom === prenom2 && age === age2) {
    alert('bienvenue');
} else {
    alert('Vous avez un problème de connexion');
} */

// 1 - Demander le prenom  et l'âgede de l'utilisateur avec un prompt
var prenomLogin = prompt("Pour accéder à votre compte veuillez entrez votre prénom:");
var ageLogin = parseInt(prompt('Pour acceder à votre compte veuillez entrer votre âge:'));

// 2 - Je vérifie si le prénom(prenomLogin) et l'âge (ageLogin) saisis correspondent à ceux de mon authentification (prenom)(age)

if(prenom === prenomLogin && age === ageLogin) {
    alert("Bienvenue " + prenomLogin);

}else {
    alert('Accès refusé: vos identifiants ne sont pas corrects');
}