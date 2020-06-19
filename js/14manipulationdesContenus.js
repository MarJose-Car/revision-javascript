// Nouvelle Syntaxe ECMA 6 avec les fonctions fléchés
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

/**
 * Les fonctions fléchées sont des fonctions qui possédent une syntaxe très compacte, ce qui les rend très repides à écrire.
 * Les fonctions fléchées utilisent le signe '=>' qui leur a donné leur nom à cause de sa forme de flèche.
*/

/*
Expression de fonction classique :

Let calcul = function(a, b) {
    return a + b;
};
*/

// Équivalent en fonction fléchée :

// let calcul = (a, b) => a + b;
// alert(calcul(1, 2));

// AUTRE EXEMPLE
// function 1(e) {
//    console.log(e);
// }

// Équivalent à cà : 
l = e => console.log(e);

// Je souhaite récupérer mon lien google

var google = document.getElementById('google');
l(google);

// -- Maintenant, je souhaite accéder aux informations de ce lien

    // -- a : Le lien vers lequel pointe la balise
    l(google.href);

    // -- b: l(ID de la balise
    l(google.id);

    // -- c : La Classe de la balise
    l(google.className);
    // La propriété className récupère et définit la valeur de l'attribut 'class' de l'élément spécifié

    // -- d : Le texte de la balise
    l(google.textContent);
    // La propriété textContent est une chaine de caractères représentant le même contenu de l'élément HTML au format TEXTE (sans les balises HTML)

    /**
     * Maintenant je souhaite modifier le contenu de mon lien
     * Comme une variable classique, je vais simplement affecter une nouvelle valeur à mon 'textContent'.
     */
    google.textContent = "Mon nouveau lien vers Google :";

    // AJOUTER UN ÉLÉMENT DANS MA PAGE

    /**
     * Nous allons utiliser 2 étapes :
     * 
     * 1. La fonction document.createElement() va permettre de générer un nouveau élément dans le DOM, que je pourrais modifier par la suite avec les méthodes que nous venons de voir
     * 
     * NB : Ce nouveau élément est placé en mémoire
     */

     // -- Définition de l'élément 
     var span = document.createElement('span');

     // -- Si je souhaite lui donner un ID
     span.id = "monSpan";

     // Lui attribuer du contenu
     span.textContent = 'Mon nouveau texte en JS !';

     // -- Comment ajouter l'élément dans la page
     google.appendChild(span);
     // appendChild ajoute l'élément HTML enfant à la fin d'un élément parent. Ici on rajoute un <span>  dans notre lien <a>

     /* -----------------------------------
               EXERCICE

        En partant du travail déjà réalisé sur la page.
        Créez directement dans la page une balise <h1> ayant comme contenu :
        'Titre de mon Article'.
        Dans cette balise, vous créerez un lien vers une url de votre choix,
        Bonus : Ce lien sera de couleur Rouge et non souligné.
        <h1><a>TITRE</a></h1>     
            ----------------------------------------*/


// Création de la balise H1
var h1 = document.createElement('h1');
console.log(h1);

// Création de la balise a
var a = document.createElement('a');

// Titre de l'article
a.textContent = "Titre de mon Article";

// Je donne un lien à mon lien
a.href = "https://facebook.com";

// Je met mon lien <a> dans mon <h1>
h1.appendChild(a);

// Je met mon <h1> dans ma page
document.body.appendChild(h1);

// Je veux que mon lien ne soit pas souligné
a.style.textDecoration = "none";

// Je veux que mon lien soit de couleur Rouge
a.style.color = "red";