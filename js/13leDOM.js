/**
 *  Le DOM signifie 'DOCUMENT OBJECT MODEL' (c'est à dire "Model d'Objet de Document") en français. Le DOM est une interface de programation qui est une représentation du HTML d'une page web qui permet d'acceder aux éléments de cette page et de les modifier avec JavaScript.
 * 
 * Il faut voir le Dom comme un arbre où chaque élément peut avoir zéro ou plusieurs enfants, qui peuvent avoir eux-mêmes zéro ou plusieurs enfants...
 * 
 * Dans le DOM, on commence toijours par un élément racine qui est le point de départ du codument: ma balise <html>.
 * Celle ci a pour enfants les balises <head> et <body> qui ont donc un parent commun => la balise <html>. Vous trouverez ensuite le contenu de votre page dans la balise <body> sous forme de liens, boutons, blocs, etc...
 * 
 * Avec une interface de programation nous permetttyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyant de parcourir le DOM, nous alions pouvoir INTÉRAGIR avec lui. Ces interactions comprennent:
 * -> la modification du contenu d'un élémentprécis
 * -> la modification du style d'un élément
 * -> la création ou la suppression d'éléments
 * -> l'interaction avec les utilisateurs (afin de récupérer des clics sur un élément ou encore de récupérer leur nom dans un formulaire)
 * -> etc...
 * 
 * En resumé:
 * Aujourd'hui les sites Internets sont de plus en plus dynamiques et animés. En effet, leur contenu charge et évolue en continu, sans avoir besoin de recharger la page. Cela vous permet d'avoir une navigation fluide et agréable.
 * Eh bien c'est le DOM qui nous permet de faire cela !!!
 * 
 * L'objet "document" est le point d'entrée vers mon contenu HTML.
 * Chaque page chargée dans mon navigateur a un objet "document".
 * Ex: document.write(""); me permet d'afficher du contenu en JS dans mon HTML
 */

 /**
  * Comment puis-je faire pour récupérer les différentes informations de ma page HTML ???
  */

/*-----------------------------------*\
| ~ ~ ~ document.getElementById ~ ~ ~ |
|-------------------------------------|
|  document.getElementById() est une  |
|  fonction qui va permettre de       |
|  récupérer un élément HTML à partir |
|  de son identifiant unique : son ID |
\*-----------------------------------*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);
  
/*--------------------------------------------*\
| ~ ~ ~ document.getElementByIdClassName ~ ~ ~ |
|----------------------------------------------|
|    document.getElementById() est une         |
|    fonction qui va permettre de              |
|    récupérer un élément HTML à partir        |
|    de son identifiant unique : son ID        |
\*--------------------------------------------*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// Me renvoie un tableau JS avec mes éléments HTML (Collection HTML)

/*-----------------------------------------*\
| ~ ~ ~ document.getElementByTagName  ~ ~ ~ |
|-------------------------------------------|
|  document.getElementByTagName() est une   |
|  fonction qui va permettre de récupérer   |
|  un  ou plusieurs éléments (une liste)    |
|  HTML à partir de leur *nom de balise*    |
\*-----------------------------------------*/

var span = document.getElementsByTagName('span');
console.log(span);

// -- Me renvoie un tableau JS avec mes éléments HTML (Collection HTML)