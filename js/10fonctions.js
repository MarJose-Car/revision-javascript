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