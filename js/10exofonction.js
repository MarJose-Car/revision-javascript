/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu es donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// -- 1. Inicialisation des variables

var dateObj = new Date();				  // Date() permet de créer une instant qui représent un moment précis dans le temps.	
var anneeActuelle = dateObj.getFullYear(); // getFullYear = retourne l'année entière (méthode js)

/**
    * Déclarer une fonction qui prend des variables en paramètres
    * @param {string} prenom
    * @param {number} age
*/

// -- 2. Création d'une fonction
function Hello(){

    // - 2a. Je demande dans ma fonction à l'utilisateur son prénom

    let prenom = prompt('Quel est votre prenom ?');
    console.log(prenom);
    console.log(typeof prenom);

    // - 2b. Je demande dans ma fonction à l'utilisateur son age
    let age = parseInt(prompt('Bonjour ' + prenom +  ' quel est votre age ?'));
    console.log(age);
    console.log(typeof age);

    // - 2c. Déduire l'année de naissance et l'afficher dans une alerte
    alert('AMAZING ! Vous êtes né en ' + (anneeActuelle - age) + ' ! ');
    
    // -- 2d. J'affiche un récapitulatif
    document.write("Bienvenue " + prenom + " tu as l'air en forme pour quelqu'un de " + age + " et néé en " + (anneeActuelle-age) + "! ");
}
// -- 3. On execute la fonction Hello
Hello();