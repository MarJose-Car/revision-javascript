// ------ Les fonctions

/* Déclarer une fonction
NB : Cette fonction ne reyourne aucune valeur et ne prend pas de paramètres.
*/

function Bonjour(){
    alert('Bonjour !');
}
/*
    * Je vais executer ma fonction 'Bonjour' et déclancher ses instructions
*/
Bonjour();

/** 
    * Déclarer une fonction qui prend des variables en paramètres
    * @param{string} Prenom
    * @param{string} Nom
*/
function ditBonjour(Prenom, Nom) {
    alert(Prenom + ' ' + Nom);
}

// Appeler/Executer une function avec des paramètres
ditBonjour("Maria", "De Carvalho");

/* -----------------------------
 Exercice:
  Créer une fonction permettant d'effectuer l'adition de deux nombres passés en paramètres.
                         ----------------------------------*/
  /**
   * Déclarer une fonction qui prend des variables en paramètres
    * @param{number} nb1
    * @param{number} nb2
   */
      
//    function addition(nb1, nb2) {
//     return nb1 + nb2
//    }

//    document.write("<p>" + addition(15, 65) + "</p>");

   /* -----------------------
   EXERCICE: 
   J'arrive sur un espace sécurisé au moyen d'un email et d'un mot de passe.

   En cas d'échec une alert m'informera le problème.
   Si tout se passe bien, un message de bienvenue m'accueille.
                                ----------------*/

                                var email, mdp;

                                email = 'batman@robin.gotham';
                                mdp = 'joker';

/**
 * Vérifie l'identification de l'utilisateur
 * @param{string} emailValide
 * @param{string} mdpValide
 * @return {boolean}
 */
   
 function monUtilisateurEstCorrect(emailValide, mdpValide) {
     if(emailValide === email && mdpValide === mdp) {
         return true;
     }else{
         return false;
     }
 }
 // -- 1. Demander à l'utilisateur son email

 var emailUser = prompt("Bonjour, quel est votre email ?", "<Saisissez votre email");

 // -- 2. Demander à l'utilisateur son mot de passe
var mdpUser = prompt("Bonjour, Quel est votre mode de passe ?", "<Saisissez votre mode de passe");

 // --3. Vérifier si l'email et le mot de passe saissie par l'utilisateur correspondent avec les variables 'email' et 'mdp'
 if(monUtilisateurEstCorrect(emailUser, mdpUser)) {
     // -- 3a. Si tout est ok, alors 'bienvenue'
     alert ('bienvenue' + emailUser + ' ! ');

 }else {
     // -- 3b. Sinon, on affiche un message d'erreur
     alert ('attention, email/mot de passse incorrect.');
 }

// EXEMPLE SANS LES FONCTIONS

// -- 1. Demander à l'utilisateur son adresse email
// var emailUser = prompt("Bonjour, Quel est votre email ?", "<Saisissez votre Email>");

// -- 2. Je vérifie si l'email saisi (emailUser) correspond avec la variable "email"
// if (emailUser === email) {
    // 2a. Tout est ok, je continue la vérification avec le mot de passe
    // var mdpUser = prompt("Bonjour, Quel est votre email ?", "<Saisissez votre mot de passe>");

    // Vérification du mot de passe
//     if(mdp === mdp) {
//         alert('Bienvenue ! ');

//     }else {
//         alert('Attention mot de passe incorrect.');
//     }

// }else{
//     Alert ('Attention votre adresse email n\est pas reconnu.')
// }
