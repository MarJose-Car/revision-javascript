// - Déclarer un tableau indéxé

var Prenoms = [ 'Vincent', 'Mamadou', 'Juliette', 'Sebastien', 'Kevin'];

// Aperçu dans la console
console.log(Prenoms);

// -- Si je veux connaitre le nombre d'éléments de mon tableau /
var NombreElementsDansMonTableau = Prenoms.length;
console.log(NombreElementsDansMonTableau);  // affiche 5

// Pour récupérer une valeur dans un tableau indexé, j'utilise son index
console.log(Prenoms[2]);  // -- Juliette
console.log(Prenoms[0]);  // -- Vincent
console.log(Prenoms[4]);  // -- Kevin

// --
var i = 3;
console.log(Prenoms[i]);  // -- Sebastien

// -- Pour i = 0 (au départ la valeur de i est 0); tant que i est strictement inférieur à "NombreElementsDansMonTableau" (Prenoms.length; alors i++ (incrémentation de i par 1)
for (let i = 0; i < NombreElementsDansMonTableau; i++) {
    // Tout ce qui est situé à l'intérieur des accolades sera dans la boucle

    console.log('Ici, i  =' + i);  
    console.log(Prenoms[i]);  
    console.log('-----');  
}  
 
// Voyaons maintenant comment procéder avec des objets

var Contact = {
    // Indice / Valeur
    prenom :     'Caroline',
    nom    :     'LEPIED',
    tel    :     '01 23 45 67 89'
};

// Aperçu dans la console
console.log(Contact);

// Pour récupérer les valeurs d'un objet j'utilise le ' . ' suivi de l'indice
console.log('Prénom =>' + Contact.prenom);
console.log('Nom =>' + Contact.nom);
console.log('Téléphone =>' + Contact.tel); 

// -- Supposons que je souhaite avoir un tableau de contacts
var ContactsAsArray = [
    [
        'Caroline',
        'LEPIED',
        [
            '01 23 45 67 89',
            'caroline.pied@gmail.com',
            [
            '14 rue de la Bonté',
            '75 000',
            'Paris'
            ]
        ]
    ],
    [
        'Michaël',
        'FOSSENBORg',
        [
            '01 32 54 76 98',
            'michael.foss@yahoo.com'
            [
                '29 rue de la Soif',
                '92000',
                'Nanterre'
            ]
        ]
    ],

]
console.log(ContactsAsArray);

// Ce n'est vraiment pas pratique pour manipuler les données. On va plutôt privilégier les Objets.

var Contacts = [
    'Caroline',
    'Frank',
    {
        // INDICE            VALEUR
            prenom     :    'Caroline',
            nom        :    'LEPIED',
            tel        :    {
                fixe   :    '01 23 45 67 89',
                port   :    '06 12 34 56 78'
            }

        },
        {
            // INDICE               VALEUR
                prenom      :       'Michaël',
                nom         :       'FOSSENBORG',
                tel         :       {
                    fixe    :       '01 32 54 79 98',
                    port    :       ' 06 21 43 65 98'
                }
        }
];

// -- Aperçu dans la console de mon tableau de Contacts
console.log(Contacts);

// -- Comment accéder aux valeurs de mon objet, dans un tableau indexé
    // -- 1. D'abord, je récupère l'oobjet
    console.log(Contacts[3]);

    // -- 2. Pour accéder aux valeurs de mon objet
    console.log('Prénom ->' + Contacts[3].prenom);
    console.log('nom ->' + Contacts[3].nom);
    console.log('Téléphone Fixe ->' + Contacts[3].tel.fixe);
    console.log('Téléphone Portable ->' + Contacts[3].tel.port);

    // -- En résumé j'accede à la valeur de l'indice 'prenom' de l'objet situé à l'index 3 de mon tableau 'Contacts'

    console.log('------');

    // -- Ici, j'accéde à la valeur de l'indice 'prenom' de l'objet situé à l'index 2 de mon tableau "Contacts"

    var j = 2;
console.log('Prénom ->' + Contacts[j].prenom);
console.log('nom ->' + Contacts[j].nom);
console.log('Téléphone Fixe ->' + Contacts[j].tel.fixe);
console.log('Téléphone Portable ->' + Contacts[j].tel.port);

// -- Comment parcourir mon tableau avec des objets.
// -- Supposons le tableau suivant:
var Apprenants = [
    {   // INDICE
            nomcomplet  :       'Gregory N\'DZIE',
            classe      :       'Terminale ES'
        },
        {
            nomcomplet  :       'Charlotte DANTE',
            classe      :       'BAC ST2S'
        },
        {
            nomcomplet  :       'Sylvie MARRON',
            classe      :       'CAP Coiffure'
        },
        {
            nomcomplet  :       'Christopher PETERSON',
            classe      :       'Master II Informatique'
        },
        {
            nomcomplet  :       'Rachel CHATEAU',
            classe      :       'Doctorat Scientifique'
        },
    ];
    console.log(Apprenants);