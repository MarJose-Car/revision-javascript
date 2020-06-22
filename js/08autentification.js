alert();
/* -- A partir du tableau fourni, vous devez mettre un place un système d'authentification.
Après avoir demandé à votre utilisateur son email et mot de passe, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et son prémon (document.write):

En cas d'echec, vous afficherez une alert pour l'informer de l'erreur.
--  */

var BaseDeDonnees = [
    { 'prenom': 'Kevin', 'nom': 'Seri', 'email':'kevin.seri@lepoles.fr', 'mdp': 'batman!'},
    { 'prenom': 'Alexandro', 'nom': 'Rolland', 'email': 'alexandro.rolland@lepoles.fr', 'mdp': 'joker!' },
    { 'prenom': 'Houda', 'nom': 'Jaadar', 'email': 'houda.jaadar@lepoles.fr', 'mdp': 'ivy!' },

];


// LesFlemards.js

// function l(e){
//     console.log(e);
// }
l = e => console.log(e);

function w(e){
    console.log(f);
}

w = f => document.write(f);

// -- Déclaration de mes Variables
// -- EstCeQueLeMailDansLeTableau = faux;

var isEmailInArray = false;

// -- Demander à l'utilisateur de rentrer son email /mot de passe

var email = prompt('bonjour, veuillez saisir votre email:');
var mdp = prompt('bonjour, veuillez saisir votre mot de passe:');

// Parcourir l'emsemble des données de mon tableau
for(let i = 0; i <BaseDeDonnees.length; i++){

    //vérifier l'identification de l'utilisateur
    if(email === BaseDeDonnees[i].email && mdp === BaseDeDonnees[i].mdp){
    // j'ai trouvé une correspondance
    isEmailInArray = true;
    w('bonjour ' + BaseDeDonnees[i].prenom + ' ! ');

    // Je stop la boucle for avec break, j'ai trouvé les données que je cherchais
    break;
    }
}
if(!isEmailInArray){
    // je ne trouve aucune correspondance
    alert('Email ou mdp incorrects');
}

// let prenom = prompt('Quel est votre prenom ?');
// console.log(prenom);

// let nom =prompt('Bonjour ' + prenom + ' quel est votre nom ?');
// console.log(nom);

// let email = prompt(" Vous êtes dans le bon chemin " + prenom + " maintenant rentrez votre email ! ");
// console.log(email);

// let mdp = prompt('pour finir ' + prenom + 'entrez votre mdp');
// console.log(mdp);

// if ((prenom === prenom)&&(nom === nom)&&(email === email) && (mdp === mdp)) {
//     document.write('bievenue ' + prenom + '!')  
// }else{
//     alert('mdp ou email incorrects');
// }

