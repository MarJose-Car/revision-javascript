/**
 * L'instruction SWITCH permet de vérifier le contenu d'une variable à partir de nombreuses valeurs.
 * Elle vérifiz successivement les diférents valeurs des "étiquetes" jusqu'à ce qu'il trouve le bon contenu qui correspond à l'espression entre les parenthèses.
 * 
 * Syntaxe:
 *  switch(expression) {
 * 
 *  case etiquette 1:
 *  // code à exécuter pour l'étiquete 1 
 * 
 *  case etiquette 2:
 *   // code à exécuter pour l'étiquete 2
 *  break;
 *  default:
 *  // code à exécuter si expression n'est pas vrai pour aucune des   cases 1 et 2
 * }
 * 
 * Ici, nous avons d'abord une seule expression entre les parenthèses (le plus souvent une variable) qui est évaluée une fois.
 * 
 * La valeur de l'expression est ensuite comparée avec les valeurs pour chaque 'case' dans la structure.
 * 
 * S'il y a une occurence (cas/circonstance), le bloc de code associé à cette occurence (à ce cas) est exécuté

L'instruction BREAK permet d'interrompre le déroulement du code quan la condition est réalisée. 
*/

let i = 7;

switch(i){
    case 1:
        document.getElementById('p1').innerHTML = "i stoke la valeur 1";
        break;
    case 3:
        document.getElementById('p1').innerHTML = "i stoke la valeur 3";
        break;
    case 5:
        document.getElementById('p1').innerHTML = "i stoke la valeur 5";
        break;
    case 7:
        document.getElementById('p1').innerHTML = "i stoke la valeur 7";
        break;
    case 10:
        document.getElementById('p1').innerHTML = "i stoke la valeur 10";
        break;
    default:
    case 1:
        document.getElementById('p1').innerHTML = "i ne stoke ni 1, ni 3, ni 5, ni 7, ni 10";    
}