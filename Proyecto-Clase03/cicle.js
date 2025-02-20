
//* Proyecto - Clase 03 for
//Declarar el array de frutas
let frutas = ["manzana", "banana", "pera", "naranja", "uva", "kiwi", "melón", "naranja", "uva", "uva", "sandia", "toronja", "uva", "uva"];
//Declarar el objeto de conteo
let contadorFrutas = {};
//Recorrer el array de frutas
for (let i = 0; i < frutas.length; i++) { 
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;//si ya existe la fruta, se le suma 1
    } else {
        contadorFrutas[fruta] = 1;//si no existe la fruta, se le asigna el valor 1
    }
}
//Imprimir el objeto de conteo
console.log("Conteo de frutas:", contadorFrutas);

//* Proyecto - Clase 03 WHILE
//Declarar el array de frutas
let frutasW = ["manzana", "banana", "pera", "naranja", "uva", "kiwi", "melón", "naranja", "uva", "uva", "sandia", "toronja", "toronja", "toronja"];
//Declarar el objeto de conteo
let contadorFrutasW = {};
let i = 0;
while (i < frutasW.length) {
    let fruta = frutasW[i];
   contadorFrutasW[fruta] = (contadorFrutasW[fruta] || 0) + 1;//Incrementar usando el operador logico ||
    i++;
}
//Imprimir el objeto de conteo
console.log("Conteo de frutas:", contadorFrutasW);