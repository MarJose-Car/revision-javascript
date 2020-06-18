/* --------------------------
         EXERCICES 
---------------------------- */

// -- supposons le tableau suivant :
var Prenoms = ['Zitouni', 'Maria', 'Sahar', 'Philipe', 'Norya', 'Samia', 'Christian', 'Cinnie'];

/**
 * CONSIGNE : Grâce à une boucle for
 * ressortir la liste des prenoms du tableau ci-dessus dans la console, ou sur une page
 */
console.log(Prenoms);
for (let i = 0 ; i < Prenoms.length; i++) {
    // .length indique le nombre d'éléments présents dans le tableau
    console.log(Prenoms[i]);
}
    console.log("-------AVEC LA BOUCLE WHILE---------");

    // Avec la boucle WHILE

    var j = 0;
    while(j< Prenoms.length) {
        console.log(Prenoms[j])
        j++;
    }

    console.log('-------AVEC LA BOUCLE FOR EACH ----------');
    // Avec la boucle FOR EACH
    // forEach() => parcourt les éléments du tableau un à un pour y exécuter une fonction
    // syntaxe -> tableau.forEach(Function)
    Prenoms.forEach(affichePrenoms);

    /* forEach() exécute la fonction affichePrenoms une fois pour chaque élément du tableau, da,s l'ordre croissant des indices.

    affichePrenoms est appelé avec trois arguments:
        -> la valeur de l'élément
        -> l'index de l'élément
        -> le tableau utilisé
        
    forEach exécute la fonction affichePrenoms une fois pour chaque élément.*/
        
    function affichePrenoms(valeur, i) {
        console.log(i + ' ' + valeur);
    }

    console.log('------- AVEC LA BOUCLE FOR OF -----------');
    // Avec la boucle FOR OF
    /* Associé à 'FOR', 'OF' permet de parcourir l'ensemble des propriétés d'un objet.
    La boucle for of retourne directement la valeur de de la propriété.
    Syntaxe -> FOR (variable OF iterable){... instructions ...}
    variable -> à chaque iteration, la valeur d'une propriété différent est affectée à 'variable' (cette variable peut être déclarée avec var, let ou const)
    iterable -> L'objet dont on parcourt les propriétés énumérables
    */

    for (apprenants of Prenoms) {
        console.log(apprenants);
    }

