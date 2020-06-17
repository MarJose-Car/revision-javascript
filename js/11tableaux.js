// -- Déclarer un tableau Ind&xé.

var monTableau = [];

monTableau[0] = 'Tristan';
monTableau[1] = 'Charles';
monTableau[2] = 'Monica';

// -- Affiche toutes les données de mon Tableau
console.log(monTableau);

// -- Affiche l'index[1] de monTableau ("Charles")
console.log(monTableau[1]);

var nosPrenoms = ['Pierre', 'Marie', 'Sofiane', 'Sarah', 'Melanie'];
console.log(nosPrenoms);

// Déclarer et affecter des Valeurs à un Object

var Profil = {
    prenom : "Maria",
    nom : 'De Carvalho',
    age : 46
};
console.log(Profil);
console.log(Profil['prenom']);
console.log(Profil.prenom);
console.log(Profil.nom);

// -- Je vais créer deux tableaux indéxés

var listePrenoms = ['Addoulaye', 'Christine', 'Anna'];
var listeNoms = [ 'Diarra', 'Floret', 'Conda'];

var Annuaire = [listePrenoms, listeNoms];
console.log(Annuaire);
document.write(Annuaire[0][1]);
document.write(" ");
document.write(Annuaire[1][1]);

