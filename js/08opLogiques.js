// OPÉRATEUR et : && ou AND
// Si je cumule 2 conditions : 
// => prenom === prenomLogin
// => age === ageLogin

// Pour que les 2 conditions correspondent pour être validées il faudra les associer
if((prenomLogin === prenom) && (ageLogin = age)) {
    /* ... Code ...
    Je ne rentre ici que si les deux conditions sont vraies */
}

/*

if((A) && (B)) {...........}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI
*/ 

// OPÉRATEUR OU: || ou OR (| alt gr + 6)
/*
if ((C) || (D)) {..........}
=> si C est FAUX ou D est FAUX => FAUX
=> si C est VRAI ou D est FAUX => VRAI
=> si C est VRAI ou D est FAUX => VRAI
=> si c est VRAI ou D est VRAI => Vrai 
*/

// OPÉRATEUR ' ! ' signifie : différent de / contraire de

var utilisateurLog = true;
if(!utilisateurLog) {
    // si l'utilisateur n'st pas connecté/ loggé
}
// ce qui revient à écrire:
if(utilisateur == false) {
    // si l'utilisateur n'est pas connecté/loggé
}
