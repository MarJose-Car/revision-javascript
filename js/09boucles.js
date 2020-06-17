// -- LA BOUCLE FOR

/* 

STRUCTURE => for(3 arguments) {
       code
}
Pour i égale 0; tant que i est strictement inférieur ou égal à 10; alors j'incrémente i par 1;
*/

for(let= i = 0; i <=10 ; i++) {
    document.write ("<p> Instruction exécutée: <strong>" + i + "</strong></p>");
}

/*
1. Initialise un compteur à partir de combien je compte (par défaut la variable "j")
2. La condition à vérifier qui doit être VRAI (TRUE)
3. Le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc j++)
*/

for (var i = 1; i <=10; i+=2) {
    document.write("<p> Je compte deux par deux :" + i +"</p>");
}

// La Boucle while (tant que)

/* Tant que j est strictement inférieur ou égal à 10; alors j'exécute mes instructions puis j'incrémente j de 1.
 */
var j = 1;
while (j <= 10) {
    document.write("<p> Ma valeur est de : <srong>" + j + "</strong></p>");

    // Attention à ne pas oublier l'incrémentation
    j++;
}

// La boucle while et souvent utilisée quand on ne connait pas le nombre de tours de boucle à l'avance.

var x = 1;
while (x <= 22) {
    document.write("<hr><p> je suis le " + x + "tour de boucles </p>");
    x++;
}

/*---------------------------------
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
-----------------------------------*/

// var mois = 1000;
// for(mois = 1000; mois<= 2000; mois+=50 ){
//     document.write("<p> chaque mois j'ai" + mois + "</p>");
// }
// var mois = 1000;
// while( mois <=2000){
//     document.write("<p>" + mois + "</p>");
//     mois++
// }

// ressortir chaque versement
// for(var m=1000; m<=2000; m+=50){
//     document.write("<p> Ce mois, j'ai sur mon compte:" + m + "</p>");
//     console.log("il y a ") + 1000/50 + "fois 50";
// }

// même chose avec la boucle while
// var t = 1000;
// while (t<=2000){
//     document.write("<p> Ce mois, j\'ai sur mon compte: " + t +  "</p>"); 
//     t+=50;
// }

// Ressortir le nombre de temps qu'il faut pour obtenir 2000€

var monCompte = 1000;
var temps = 0;

while(monCompte<2000){
    monCompte+=50;
    temps++;
}
document.write("<h3> Argent sur mon compte:" + monCompte +"€</h3>");
document.write("<h3> Pour atteindre la même some, il me faut: " + temps + " mois</h3>");
document.write("<h3> Pour atteindre la même some de 2000€, il me faut:" + (temps/12) + " années </h3>");