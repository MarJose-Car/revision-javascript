var chiffre1 = parseInt(prompt('choisissez un chiffre'));
var chiffre2 = parseInt(prompt('choisissez un deuxième chffre'));

if(chiffre1 < chiffre2) {
    alert(chiffre1 + ' est inférieur à ' + chiffre2);

}else if(chiffre1 === chiffre2) {
    alert(chiffre1 + ' est égal à ' + chiffre2);

}else if (chiffre1 > chiffre2) {
    alert(chiffre1 + ' est supérieur à ' + chiffre2);

}else {
    alert(' Ce n\'est pas un chiffre ça :) !');
}
