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

var dateObj = new Date();				  // Date() permet de créer une instant qui représent un moment précis dans le temps.	
var anneeActuelle = dateObj.getFullYear(); // getFullYear = retourne l'année entière (méthode js)

/**
    * Déclarer une fonction qui prend des variables en paramètres
    * @param{string} prenom
    * @param{number} age
*/
function Hello(){
    let prenom = prompt('Quel est votre prenom');
    let age = parseInt(prompt('Bonjour ' + prenom +  ' quel est votre age ?'));
    
}
Hello(prenom + 'vous avez' + age + 'et vous êtes né en' + dateObj);