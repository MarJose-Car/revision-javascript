var nombre1 = 5;
var nombre2 = 3;

console.log(nombre1);
console.log(nombre2);

var permutation = nombre2;
var nombre2 = nombre1;
var nombre1 = permutation;
alert(nombre1);
alert(nombre2);

// autre façon
var nombre1 = 5;
var nombre2 = 3;
nombre1 += nombre2;
//vaut (5+3) = 8
nombre2 = nombre1 - nombre2;
// vaut (8-3) = 5;
nombre1 -= nombre2;
//nombre1 vaut (8-5) = 3

