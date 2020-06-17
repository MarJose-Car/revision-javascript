// alert('test');

// STRUCTURE DE BASE "IF"

// {
//    par défaut IF vérifie si la condition est vraie
//  /*..... Code ..... */
// }

var nb1 = 10;

if(nb1 < 50) {
    console.log("nb1 est bien inférieur à 50");
}

if(true) {
    /*.... Code si condition VRAIE .....*/
} else {
/*.... Code si condition FAUSSE .....*/12
}

if(nb1 >50) {
    console.log ("nb1 est bien supérieur à 50");
} else{
    console.log("nb1 n'est pas supérieur à 50");
}

/* EXERCICE :

On utilise la condition IF pour vérifier l'âge de l'utilisateur.
=> s'il est majeur je lui souhaite la bienvenue
=> s'il est mineur je [1] lui signale et [2] le renvoie vers un autre site.
*/

// 1 - Je déclare la majorité légale
var ageMajeur = 18;

// 2 - Demander l'âge de l'utilisateur en s'assurant que nous avons un NUMBER
var age = parseInt(prompt("Entrez votre âge"));
console.log(age);

// 3 - Je vérifie si mon internaute est majeur
if(age > ageMajeur) {
    document.write("bienvenue sur le site");
} else {
    // si l'internaute est mineur je lui signale
    document.write("Vous êtes mineur, ce site n'est pas pour vous !");
    
    document.location.href = "https://maria.ma6tvacoder.org";
}

/* @param {Number} age
    function estMajeur (age) {
        if(age>= majoriteFr) {
            return true;
        } else {
            return false
        }
    }
*/
