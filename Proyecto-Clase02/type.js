/* Visto en clase 02 */
//string
let mensaje = "hola mundo";
console.log(mensaje.toUpperCase);

//Template
let nombre = "Joel";
console.log(`Hola ${nombre}`);
console.log(`Hola` + nombre + `como estas?`);
console.log(`Hola`, nombre, ` como estas?`);

//Boolean
let esMayor = true;
console.log(esMayor && false);

//Arrays
let alumnos = ["Adelina", "Randy", "Saul", "Maria"];
console.log(alumnos[3]);

//Modificar con asignacion
alumnos[2] = "Ian";
console.log(alumnos);

//añadir
alumnos.push("Natalia");
console.log(alumnos);

alumnos.unshift("Scarlett");
console.log(alumnos);

console.log(alumnos.length);

// Numeros
let x = 2;
x += 5;
console.log(x);
// NaN
let division = 0;
console.log(division / 0);

// si aprobe o reprobe 
let note = 5.9;
const noteAprobatoria = 6;
if(note >= noteAprobatoria){
    console.log("Aprobaste");
} else {
    console.log("Reprobaste");
}

//mas de una condicional "else if"
let temp = 18;
if (temp > 30) {
    console.log("Calor");
} else if (temp >= 21 && temp <= 29) {
    console.log("Templado");
} else {
    console.log("Frio");
}
// operador ternario
let edad = 23;
let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(resultado);  //condicion, pregunta, sentencia, division y sentencia falsa

console.log( 1 === `1`); // comparacion del tipo de dato
console.log( 1 == `1`); // comparacion solo el valor
 // asignacion

let dia = `jueves`;
switch (dia) {
    case `lunes`:
        console.log(`ìnicio de semana`);
        break;
    case `jueves`:
        console.log(`jueves chido`);
        break;
    default:
        console.log(`no se que dia es`);
        break;
}

// EJERCICIOS DE CLASE 02
// comprobacion de par o impar
let Numeros = Math.floor(Math.random() * 101);
console.log(Numeros);
if (Numeros % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}
// comprobacion de numeros primos
let NumerosPrimos = Math.floor(Math.random() * 101);
console.log("Número generado: ", NumerosPrimos);
function esPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
if (esPrimo(NumerosPrimos)) {
    console.log("El número es primo");
} else {
    console.log("El número no es primo");
}
// Adivinar la estacion del año 
let mes = Math.floor(Math.random() * 12) + 1;
console.log("El mes es: " + mes);
if (mes >= 3 && mes <= 5) {
    console.log("Primavera");
} else if (mes >= 6 && mes <= 8) {
    console.log("Verano");
} else if (mes >= 9 && mes <= 11) {
    console.log("Otoño");
} else {
    console.log("Invierno");
}


/* Proyecto - Clase 02 */
/**
 * Para este proyecto solicita generar un mensaje personalizado basado en la nota.
 */

let nota = Math.floor(Math.random() * 101);
console.log(nota);
if (nota >= 90) { 
    console.log("Excelente");
} else if (nota >= 75 && nota < 89) {
    console.log("Bien");
} else if (nota >= 60 && nota < 74) {
    console.log("Suficiente");
} else {
    console.log("No aprueba");
}
