// SYNTAXE BASE

// <= Commentaire sur une ligne

/* <=
    <= Ici, je fais un commentaire sur plusieurs ligne
*/

// -- 1 : Déclarer une valeur à une variable en JS

// var Prenom;

// -- 2 : Affecter une valeur à une variable
//Prenom = "Mila";                   1ère façon pour affecter une variable
// var Prenom = "Mila";               2ème façon pour affecter une variable


// -- 3 : Une instruction en Js se termine toujours par un point-virdule (;), aussi il est possible d'écrire plusieurs instructions sur une seule ligne
// inst_1;
// inst_2; inst_3;

// -- 4 : Afficher une boite de sialogue (2 façons)
// alert("Super, tu es arrivé sur mon site ! ");          1ère façon
// window.alert(Super, tu es arrivé sur mon site ! ");    2ème façon

// -- 5 : Afficher dans la console (ici, la valeur de ma variable Prenom)

//console.log(Prenom);

// -- 6 : Afficher dans la page web
// document.write("A la pause vous pouvez aller manger des bombons !");

// -- 7 : Demander à l'utilisateur une valeur (2 façons)
// window.prompt("Question: Quel jour sommes nous ?");               1ère façon
//prompt("Question: Quelle est la capitale du Portugal?", "Lisbonne"); 2ème façon

// ... Et pour manipuler cette valeur, je n'oublie pas de stocker
//var ville = prompt("Question: Quelle est la capitale du Portugal?", "Lisbonne");
//console.log(ville);
//document.write(ville);

// -- 8 : /!\ Attention le JS est sensible à la casse ('case sensitive')
// mavariable =/= maVariable =/= ma_variable =/=MaVariable =/= ma-variable

//                camelCase     snake_case      PascalCase      kebab-case

// -- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumèriques (A-Z / 0-9), et ne peut pas être un mot réservé (var, for, let, ... des éléments natifs du langage JS)

//  Liste des mots réservés:
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

// -- 10 : Une variable peut être déclarée de façon EXPLICITE:
//        => var fruit = 'fraise';

//        Ou IMPLICITE
//        => var genre;
//        => genre = 'femme';

/* -----------------------------------------------
                LES TYPES DE VARIABLES
------------------------------------------------ */ 
    // -- 1 : Chaines de caractères (STRING)
    var voyage = "2019";
    var destination = "Nouvel- Zélande";
    
    // -- 2 : Un nombre entier (NUMBER/INTEGER ou INT)
    var annee = 2019;

    // -- 3 : Un nombre décimal (FLOAT)
    var nombre_a_virgule = -3.33;

    // -- 4 : Un Booléen (boolean = VRAI/FAUX = TRUE/FALSE)
    var unBooleen = false; // -- true

    // -- 5 : Les constantes (const)

    /* La déclaration 'const' permet de créer une constante acessible uniquement en lecture. Contrairement = une variable sa valeur ne peut plus être modifiée par réaffectation ^lus bas dans le code.
    Une constante ne peut pas être déclarée à nouveau dans le même script */

    // Par convention les constantes sont en majuscules
    // const PAYS = 'France'; -> string
    // const AN = "2020";     -> string
    // constant BIRTH = 2020; -> number

    // -- 6 : "TypeOf" permet de connaitre le type de ma variable
    console.log (voyage);
    console.log (typeof voyage);
    console.log(annee);
    console.log(typeof annee);   
    
    // En JS les variables sont auto-typées
    // On peut convertir une variable de type numner en string et inversement avec les donctions natives de JS
    // -- La fonction 'parseInt()' renvoie un entier à partir d'une chaine de caractères.

    var monChiffre = '7';
    console.log(monChiffre);
    console.log(typeof monChiffre);

    // Je ré-affecte une valeur à ma variable monChiffre
    monChiffre = "3";
    console.log(monChiffre);
    console.log(typeof monchiffre);

    // STING => FLOAT (Conversion de Text en nombre décimal avec .parseFloat)
    monChiffre = parseFloat(monChiffre);
    console.log(monChiffre);
    console.log(typeof monChiffre);

    // Number => STING (Conversion de NOMBRE en TEXTE avec .toString)
    var nb_en_lettres = 730;
    console.log(nb_en_lettres);
    console.log(typeof nb_en_lettres);






