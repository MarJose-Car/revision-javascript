/*

Les évènements vont me permettre de déclencher une fonction, c'est à dire une série d'instructions, suite à une action de mon utilisateur.

OBJECTIF : Être en mesure de capturer ces évènements afin d'exécuter une fonction

    Les Évènements Mouse (Souris):

        click       : au click sur un élément
        mouseenter  : la souris passe au dessus de la zone d'un élément
        mouseleave  : la souris de la zone d'un élément

    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        keyup    : une touche du clavier a été relachée

    Les évènements WINDOW (Fenêtre)


        scroll  : défilement dde la fenêtre
        resize  : redimensionnement de la fenêtre
    
    Les Évènements FORM (Formulaire)

        change  : pour les éléments <input>, <select> et <textarea>
        submit  : à l'envoi de formulaire
        input   : pour capter la saisie d'un utilisateur sur un champ <input>

    ----------------------Les écouteurs d'évènements ----------------

    Pour attacher un évènement à un élément, ou autrement dit, pour déclarer un écouteur d'événement qui se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante :
 */

    var p = document.getElementById("MonElement");

    // -- Je souhaite que mon paragraphe soit rouge au clic de la souris.

    function changerLaCouleurEnRouge(){
        p.style.color = "red";
    }

    p.addEventListener("click", changerLaCouleurEnRouge);

    // -------- EXERCICE PRATIQUE

    // A l'aide de javascript, je crée un champ 'input' type text avec un ID unique. J'affiche ensuite dans une alert, la saisie de l'utilisateur.

    // createElement;

    // Création du champ qu'on stocke dans une variable

var input = document.createElement('input');
console.log(input);

// Ajout de l'input dans la page
document.body.appendChild(input);

// Attribuition d'un ID
input.id = "monInput";

// parametrer un attribut
input.setAttribute('type', 'text');
input.setAttribute('placeholder', "Dites quelque chose");

// Création de la fonction qui va afficher la valeur entrée par l'utilisateur
function recupererMonTexte(){
console.log(input.value);
    alert(input.value);
}

// Enfin j'ajoute mon écouter d'événement, c'est lui qui va me mermettre de voir ce que l'utilisateur a rentré dans le champ <input>
input.addEventListener('change', recupererMonTexte);
console.log(recupererMonTexte);



    


