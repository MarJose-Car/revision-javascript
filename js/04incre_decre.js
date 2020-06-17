// alert('coucou');

// -- Incrémentation

// i++ affecte puis incrémente la valeur. Dans l'exemple ci dessous, i++ incrémentera la valeur de i, mais retournera la valeur d'origine avant d'être incrémenté.
i = 1;
j = i++;
// i = 2 et j = 1

// ++i incrémente puis affecte la valeur. Dans l'exemple ci dessous, ++i incrémentera la valeur de i, puis retournera la valeur incrémentée.
i = 1;
j = ++i;
// i = 2 et j = 2

// ++i (Pre Increment) incrémente la valeur de 1, puis retourne i 

// i++ (Post Increment) retourne i, puis l'incrémente de 1


// EXEMPLE : 
// si x = 5, alors:
// y = x++; est l'équivalent de y=x; suivi de x++; donc y = 5; et x = 6; à la fin de l'exécution de l'instruction 
// y = ++x; est l'équivalent de x++; suivi de y = x; donc y = 6; et x = 6; à la fin de l'exécution de l'instruction

// -- INCRÉMENTATION

var nb1 = 1;
nb1 = nb1 + 1;     // j'augment nb1 de 1

// affichage => nb1 = 2
console.log(nb1);
document.write(nb1);

// Ecriture simplifiée 
nb1++; //Donne la valeur AVANT d'avoir incrémenté
//Affichage =>nb1 = 3
console.log(nb1);
document.write("<br>" + nb1);
//Ecriture simplifiée 
++nb1;   //donne la valeur APRES avoir incrementé 
//Affichage =>nb1 = 4
console.log(nb1);
document.write("<br>" + nb1);
//Decrementation 
nb1 = nb1 - 1;
console.log(nb1);
document.write("<br>" + nb1);

var a = 5;
var b = a++;
console.log(a);    // affiche 6
console.log(b);    // affiche 5

b = a;
a = a + 1;  

var c = 5;
var d = ++c;   // renvoie la valeur une fois décrémentée
console.log(c);  // affiche 6
console.log(d);  // affiche 6

b = a;
a = a + 1;

var c = 5;
var d = ++c;        // renvoie la valeur une fois décrémentée
console.log(c);     // affiche 6  
console.log(d);     // affiche 6

// Suffixe
var x = 3;
y = x--;            // y = 3, x = 2
console.log(x);
console.log(y); 

// Préfixe
var a = 2;
var b = --a;  // a = 1, b = 1
console.log(a);
console.log(b);

// L'emplacement de ++ ou -- définie l'ordre de l'assignation et d'incrémentation/décrémentation.

// L'incrémentation ++ ajoute une unité à une valeur si l'opérateur est utilisé en suffixe(x++) il renvoie la valeur avant qu'elle soit incrémzntée. Si l'opérateur est utilisé en préfixe (++x) il renvoie la valeur après avoir incrémenter.