


//* Proyecto - Clase 03
let frutas = ["manzana", "banana", "pera", "naranja", "uva", "kiwi", "melón"];
let contadorFrutas = {};
for (let i = 0; i < frutas.length; i++) { 
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas[fruta] = 1;
    }
}
console.log("Conteo de frutas:", contadorFrutas);