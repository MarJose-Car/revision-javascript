/* Vous allez avoir besoin d'utiliser

1 - Plusieurs tableaux :

    - produits
    - sociétés
    - Clients 

functions
switch
ecouteur d'événement

*/
function remplirSoc() {

    var societe = document.getElementById('societe');		// On récupère l'élément societe

    // Une liste déroulante permettant de choisir le nouveau client dans les formulaires émetteur et destinataire
    societe.options[0].text = 'Nouveau client';		// La valeur de base est nouveau client
    societe.options[1].text = mySociety[0];
    societe.options[2].text = mySociety[5];
    societe.options[3].text = mySociety[10];
    societe.options[4].text = mySociety[15];

    var nomSo = document.getElementById('nomSo');
    var nom = document.getElementById('nom');
    var rue = document.getElementById('rue');
    var ville = document.getElementById('ville');
    var telephone = document.getElementById('telephone');

    societe.addEventListener('change', function () {
        switch (societe.options.selectedIndex) {				// Placer automatiquement les attributs du tableau mySociety en fonction de l'option choisie et de la case destinataire
            case 0:
                nomSo.value = "";
                nomSo.placeholder = 'Nom de la societe';		// Placeholder donne une indication sur la nature de la case et la valeur attendue
                nomSo.disabled = false;						// Disabled permet de modifier la valeur du champ
                nom.value = "";
                nom.placeholder = 'Nom';
                nom.disabled = false;					// Permet de modifier la valeur du champ également... 
                rue.value = "";
                rue.placeholder = 'Rue';
                rue.disabled = false;
                ville.value = "";
                ville.placeholder = 'Code postal, Ville';
                ville.disabled = false;
                telephone.value = "";
                telephone.placeholder = 'Numero de telephone';
                telephone.disabled = false;
                break;

            case 1:
                nomSo.value = mySociety[0];								// La valeur de mySociety[0] est récupérée en tant que nom de la société
                nomSo.disabled = true;		// Cette fois-ci interdit de modifier la valeur
                nom.value = mySociety[1];								// La valeur de mySociety[1] est récupérée en tant que nom du client
                nom.disabled = true;
                rue.value = mySociety[2];								// La valeur de mySociety[2] est récupérée en tant que nom de la rue
                rue.disabled = true;
                ville.value = mySociety[3];								// La valeur de mySociety[3] est récupérée en tant que nom de la ville
                ville.disabled = true;
                telephone.value = mySociety[4];							// La valeur de mySociety[4] est récupérée en tant que numéro de téléphone
                telephone.disabled = true;
                break;

            case 2:
                nomSo.value = mySociety[5];							// La valeur de mySociety[5] est récupérée en tant que nom de la société
                nomSo.disabled = true;
                nom.value = mySociety[6];
                nom.disabled = true;
                rue.value = mySociety[7];
                rue.disabled = true;
                ville.value = mySociety[8];
                ville.disabled = true;
                telephone.value = mySociety[9];
                telephone.disabled = true;
                break;

            case 3:
                nomSo.value = mySociety[10];					// La valeur de mySociety[10] est récupérée en tant que nom de la société
                nomSo.disabled = true;
                nom.value = mySociety[11];
                nom.disabled = true;
                rue.value = mySociety[12];
                rue.disabled = true;
                ville.value = mySociety[13];
                ville.disabled = true;
                telephone.value = mySociety[14];
                telephone.disabled = true;
                break;

            case 4:
                nomSo.value = mySociety[15];						// La valeur de mySociety[15] est récupérée en tant que nom de la société
                nomSo.disabled = true;
                nom.value = mySociety[16];
                nom.disabled = true;
                rue.value = mySociety[17];
                rue.disabled = true;
                ville.value = mySociety[18];
                ville.disabled = true;
                telephone.value = mySociety[19];
                telephone.disabled = true;
                break;
        }
    }, true);
}
remplirSoc();