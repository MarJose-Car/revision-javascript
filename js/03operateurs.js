// alert('Hello');

// --1. ADDITION
// -- INFO -- Je peux déclarer plusieurs variables à la suite

var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// -- Addition de nb1 + nb2 avec l'opérateur '+'

resultat = nb1 + nb2;
// Afficher le résultat dans la console
console.log(resultat);
// Afficher le résultat dans notre page
document.write(resultat + "<br>");


// --2. SOUSTRACTION
// -- Soustraction de nb1 + nb2 avec l'opérateur '-'
resultat = nb1 - nb2;
console.log(resultat);
document.write(resultat + '<br>');

//-- 3 . Multiplication
// -- Multipkication de nb1 * nb2 avec l'opérateur '*'

resultat = nb1 * nb2;
console.log(resultat);
document.write(resultat + '<br');

//-- 3 . Division
// -- Division de nb1 * nb2 avec l'opérateur '*'

resultat = nb1 / nb2;
console.log(resultat);
document.write(resultat + '<br');

// -- 5. Modulo
// -- Le modulo retourne le reste d'une division
// ex: 8% 3 => 6 et 8 - 6 = 2  2 est donc le reste de ma division -> modulo
// -- Modulo de nb1 % nb2 avec l'opérateur '%'

resultat = nb1 % nb2; //ici le modulo est égal à 0 car il n'y a pas de reste
// dans 10/5(=2)
console.log(resultat);
document.write(resultat + '<br');

// -- et maintenant je ré-affecte la valeur de nb1

nb1 = 11;
resultat = nb1 % nb2;
console.log('le reste de la division de ' + nb1 +' par' + nb2 + ' est égal à : ' + resultat);
document.write(resultat + '<br');

// -- Les écriturs simplifiés

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1+=15; // (nb1) lui même + (10) quelque chose;
console.log(nb1);
document.write('<br' + nb1);

// Le raccourci est le même avec tous les opérateurs +, -, /, *, %
