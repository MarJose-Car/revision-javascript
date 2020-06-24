var Array = [                                    // Tableau des differents produits
    'x0154', 'Geforce GTX TITAN', '719.99',
    'x0883', 'Geforce GTX Phantom', '358.99',
    'R0052', 'Sapphire Radeon HD 7850', '125.35',
    'R9089', 'MSI Radeon RS 295', '989.00'
];
var mySociety = [                                // Tableau des differents sociétés
    'Netscape 2.0', 'Netscape AOL', '19 avenue de Choisy', '75013, Paris', '01 45 86 70 58',
    'You and I Production', 'Dupont', '6 rue de Gassendi', '75014, Paris', '01 45 90 52 41',
    'Starcraft Unity', 'Artosis', '151 rue de Grenelle', '75007, Paris', '01 45 85 21 68',
    'Godus', 'Moulineau', '13 quai Voltaire', '75007, Paris', '01 45 20 47 90'
];
var myCustomer = [                              // Tableau des différents clients
    'Cabinet Gérard', 'Gérard', '16 avenue Eugène Thomas','94270, Le Kremlin-Bicêtre', '01 45 70 50 40',
    'Putovski Corporation', 'Vladimir', '82 rue de Charenton', '75012, Paris', '01 45 80 70 70',
    'Chinchan Family', 'Chinchan', '39 rue Petit', '75019, Paris', '01 45 03 03 04',
    'La Main Invisible', 'Smith', '106 rue Nollet', '75017, Paris', '01 45 66 04 02',
];

// Création d'une fonction "remplirSoc()" qui permet de remplir les données directement dans le menu déroulant des sociétés

function remplirSoc(i) {
    var societe = document.getElementById('societe');        // Ici je récupère l'élément html <select> par son id 'societe'

    societe.options[0].text = "Nouvelle client à entrer";  // La valeur de base est 'nouvelle société à entrer
    societe.options[1].text = mySociety[0];                 // ici je récupère mon premier élément du tableau mySociety ("Netscape 2.0") que je décide d'afficher dans ma liste déroulante (à la deuxième position)
    societe.options[2].text = mySociety[5];
    societe.options[3].text = mySociety[10];
    societe.options[4].text = mySociety[15];

    var nomSo = document.getElementById('nomSo');
    var nom = document.getElementById('nom');
    var rue = document.getElementById('rue');
    var ville = document.getElementById('ville');
    var telephone = document.getElementById('telephone');

    customer.addEventListener('change', function() {
        switch(customer.options.selectedIndex) {             // Me permet de placer automatiquement les attributs du tableau mySociety en fonction de l'option choisie et de la case destinataire
        case 0 :                                            // Les valeurs sont vides ('')car c'est l'utilisateur de les entrer
            nomSo.value = "";
            nomSo.placeholder = "Nom de la Société";        // Placeholder donne une indication sur la nature de la case et la valeur attendue
            nomSo.disabled = false;
            nom.value = "";
            nom.placeholder = "Nom";  
            nom.disabled = false;
            rue.value = "";
            rue.placeholder = "Rue";
            rue.disabled = false;
            ville.value = "";
            ville.placeholder = "Ville";
            ville.disabled = false;
            telephone.value = "";
            telephone.placeholder = "Téléphone";
            telephone.disabled = false;
            break;

            case 1:
                nomSo.value = mySociety[0];                     // Ici je récupère et affiche le 1er élément de mon tableau mySociety (Netscape 2.0) -> le nom de la société
                nomSo.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nom.value = mySociety[1];
                nom.disabled = true;
                rue.value = mySociety[2];
                rue.disabled = true;
                ville.value = mySociety[3];
                ville.disabled = true;
                telephone.value = mySociety[4];
                telephone.disabled = true;
                break;

            case 2:
                nomSo.value = mySociety[5];                     // Ici je récupère et affiche le 1er élément de mon tableau mySociety (You and I Production) -> le nom de la société
                nomSo.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nom.value = mySociety[6];                 // Ici je récupère et j'affiche le 2ème élément de mon tableau mySociety (Dupont) -> le nom du propriétaire de la société
                nom.disabled = true;
                rue.value = mySociety[7];                   // Ici je récupère et j'affiche le 2ème élément de mon tableau mySociety (6 rue de Gassendi) -> adresse de la société(rue)
                rue.disabled = true;
                ville.value = mySociety[8];                 // Ici je récupère et j'affiche le 2ème élément de mon tableau mySociety (75014, Paris) -> la ville de la société
                ville.disabled = true;
                telephone.value = mySociety[9];             // Ici je récupère et j'affiche le 2ème élément de mon tableau mySociety (01 45 90 52 41) -> le telephone de la société
                telephone.disabled = true;
                break;                                          // Fin du case

            case 3:
                nomSo.value = mySociety[10];                    // Ici je récupère et affiche le 1er élément de mon tableau mySociety (Starcraft Unity) -> le nom de la société
                nomSo.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
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
                nomSo.value = mySociety[15];                 // Ici je récupère et affiche le 1er élément de mon tableau mySociety (Godus) -> le nom de la société
                nomSo.disabled = true;                       // disabled = true permet d'interdire la modification de la valeur du champ
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
    },true);                       // Le 'true' ici me permet de correspondre l'emsemble des mes ocurrences (case)  
}

function remplirCust(i) {
    var customer = document.getElementById('customer');        // Ici je récupère l'élément html <select> par son id 'customer'

    customer.options[0].text = "Nouveau client";  // La valeur de base est 'nouvelle société à entrer
    customer.options[1].text = mCustomer[0];                 // ici je récupère mon premier élément du tableau mySociety ("Netscape 2.0") que je décide d'afficher dans ma liste déroulante (à la deuxième position)
    customer.options[2].text = myCustomer[5];
    customer.options[3].text = myCustomer[10];
    customer.options[4].text = myCustomer[15];
    societe.options[1].text = mySociety[0];     
    societe.options[2].text = mySociety[5];
    societe.options[3].text = mySociety[10];
    societe.options[4].text = mySociety[15];

    var nomSoC = document.getElementById('nomSo');
    var nomC = document.getElementById('nom');
    var rueC = document.getElementById('rue');
    var villeC = document.getElementById('ville');
    var telephoneC = document.getElementById('telephone');

    customer.addEventListener('change', function () {
        switch (customer.options.selectedIndex) {             // Me permet de placer automatiquement les attributs du tableau mySociety en fonction de l'option choisie et de la case destinataire
            case 0:                                            // Les valeurs sont vides ('')car c'est l'utilisateur de les entrer
                nomSoC.value = "";
                nomSoC.placeholder = "Nom de la Société";        // Placeholder donne une indication sur la nature de la case et la valeur attendue
                nomSoC.disabled = false;
                nomC.value = "";
                nomC.placeholder = "Nom";
                nomC.disabled = false;
                rueC.value = "";
                rueC.placeholder = "Rue";
                rueC.disabled = false;
                villeC.value = "";
                villeC.placeholder = "Ville";
                villeC.disabled = false;
                telephoneC.value = "";
                telephoneC.placeholder = "Téléphone";
                telephoneC.disabled = false;
                break;

     
            case 1:
                nomSoC.value = mySociety[0];                     // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Netscape 2.0) -> le nom de la société
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[1];
                nomC.disabled = true;
                rueC.value = mySociety[2];
                rueC.disabled = true;
                villeC.value = mySociety[3];
                villeC.disabled = true;
                telephoneC.value = mySociety[4];
                telephoneC.disabled = true;
                break;

            case 2:
                nomSoC.value = mySociety[5];                     // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Putovski Corporation) -> le nom du client
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[6];                 // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (Vladimir) -> le nom du propriétaire du client
                nomC.disabled = true;
                rueC.value = mySociety[7];                   // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (82 rue de Charenton) -> adresse du client(rue)
                rueC.disabled = true;
                villeC.value = mySociety[8];                 // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (75012, Paris) -> la ville du client
                villeC.disabled = true;
                telephone.value = mySociety[9];             // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (01 45 80 70 70) -> le telephone du client
                telephoneC.disabled = true;
                break;                                          // Fin du case

            case 3:
                nomSoC.value = mySociety[10];                    // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Starcraft Unity) -> le nom de la société
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[11];
                nomC.disabled = true;
                rueC.value = mySociety[12];
                rueC.disabled = true;
                villeC.value = mySociety[13];
                villeC.disabled = true;
                telephoneC.value = mySociety[14];
                telephoneC.disabled = true;
                break;

            case 4:
                nomSoC.value = mySociety[0];                     // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Netscape 2.0) -> le nom de la société
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[1];
                nomC.disabled = true;
                rueC.value = mySociety[2];
                rueC.disabled = true;
                villeC.value = mySociety[3];
                villeC.disabled = true;
                telephoneC.value = mySociety[4];
                telephoneC.disabled = true;
                break;

            case 5:
                nomSoC.value = mySociety[5];                     // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Putovski Corporation) -> le nom du client
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[6];                 // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (Vladimir) -> le nom du propriétaire du client
                nomC.disabled = true;
                rueC.value = mySociety[7];                   // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (82 rue de Charenton) -> adresse du client(rue)
                rueC.disabled = true;
                villeC.value = mySociety[8];                 // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (75012, Paris) -> la ville du client
                villeC.disabled = true;
                telephone.value = mySociety[9];             // Ici je récupère et j'affiche le 2ème élément de mon tableau myCustomer (01 45 80 70 70) -> le telephone du client
                telephoneC.disabled = true;
                break;                                          // Fin du case

            case 6:
                nomSoC.value = mySociety[10];                    // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Starcraft Unity) -> le nom de la société
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[11];
                nomC.disabled = true;
                rueC.value = mySociety[12];
                rueC.disabled = true;
                villeC.value = mySociety[13];
                villeC.disabled = true;
                telephoneC.value = mySociety[14];
                telephoneC.disabled = true;
                break;
            
            case 7:
                nomSoC.value = mySociety[10];                    // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Starcraft Unity) -> le nom de la société
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[11];
                nomC.disabled = true;
                rueC.value = mySociety[12];
                rueC.disabled = true;
                villeC.value = mySociety[13];
                villeC.disabled = true;
                telephoneC.value = mySociety[14];
                telephoneC.disabled = true;
                break;
            
            case 8:
                nomSoC.value = mySociety[10];                    // Ici je récupère et affiche le 1er élément de mon tableau myCustomer (Starcraft Unity) -> le nom de la société
                nomSoC.disabled = true;                          // disabled = true permet d'interdire la modification de la valeur du champ
                nomC.value = mySociety[11];
                nomC.disabled = true;
                rueC.value = mySociety[12];
                rueC.disabled = true;
                villeC.value = mySociety[13];
                villeC.disabled = true;
                telephoneC.value = mySociety[14];
                telephoneC.disabled = true;
                break;
        }
    }, true);                       // Le 'true' ici me permet de correspondre l'emsemble des mes ocurrences (case)  
}

remplirSoc(0);
remplirSoc(1);
remplirSoc(2);
remplirSoc(3);
remplirCust(4);
remplirCust(5);
remplirCust(6);
remplirCust(7);

