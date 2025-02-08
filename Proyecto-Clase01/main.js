// Visto en clase 01
console.log("hola mundo");
// Ejemplos de tipo de datos primitivos 
let nombre = "Ivan";
let edad = 23;
let esMayordeEdad = true;
let saldo;
let cuenta = null;
let id = Symbol("id");
let numeroGrande = 1248240350n;
console.log(typeof cuenta);

// Ejemplos de datos compuestos 
let persona = {
    nombre: "Ivan",
    edad: 23,
    nacionalidad: "Mexicano"
}
console.log(persona.edad);

let numeros = [1, 2, 3, 4, 5];
console.log(typeof numeros);
console.log(numeros[2]);

let suma = function (a, b) {
    return a + b;
}
console.log(suma(2, 5));

let fecha = new Date();
console.log(fecha);


// Proyecto - Clase 01
/**
 * Para este proyecto se solicita que el usuario declare, asigne e imprima en la consola, todos los tipos de datos tanto primitivos como compuestos.
 */

/**
 * Practica de los datos primitivos
 */
let nombreP = "Sergio";
let apellidoP = "Garcia";
let nacionalidadP = "Argentino";
let edadP = 42;
let añoNacimiento = 1983;
let esMayordeEdadX = true;
let esGeneracionZ = false;
let dinero;
let cuentas = null;
let ids = Symbol("-666");
let numeroGrandeX = Infinity;
// Definicion del tipo de dato
console.log(typeof nombreP); // string
console.log(typeof apellidoP); // string
console.log(typeof nacionalidadP); // string
console.log(typeof edadP); // number
console.log(typeof añoNacimiento); // number
console.log(typeof esMayordeEdadX); // boolean
console.log(typeof esGeneracionZ);  // boolean
console.log(typeof dinero); // undefined
console.log(typeof cuentas);    // object
console.log(typeof ids);        // symbol
console.log(typeof numeroGrandeX); // number
// Imprimir en la consola
console.log(nombreP); // Sergio
console.log(apellidoP); // Garcia
console.log(nacionalidadP); // Argentino
console.log(edadP); // 42
console.log(añoNacimiento); // 1983
console.log(esMayordeEdadX); // true
console.log(esGeneracionZ); // false
console.log(dinero); // undefined
console.log(cuentas); // null
console.log(ids); // symbol
console.log(numeroGrandeX); // Infinity

/**
 * Practica de los datos compuestos
 */ 
let animal = {
    nombre: "Perro",
    raza: "Pastor Aleman",
    edad: 2,
    peso: 5,
    sexo: "macho",
    vacunado: false
}
console.log(typeof animal); // object
console.log(animal.raza); // Pastor Aleman
console.log(animal.edad); // 2
console.log(animal.peso); // 5

let numerosPrimos = [3, 5, 7, 11, 13, 17, 19];
console.log(typeof numerosPrimos); // Array tipo de objeto
console.log(numerosPrimos[0]); // 3
console.log(numerosPrimos[1]); // 5
console.log(numerosPrimos[2]); // 7

let personas = [
    {
        nombre: "Sergio",
        apellido: "Garcia",
        edad: 42,
    },
    {
        nombre: "Ezequiel",
        apellido: "Hernandez",
        edad: 25
    },
    {
        nombre: "Federico",
        apellido: "Gomez",
        edad: 21,
    }
]
console.log(typeof personas); // Array
console.log(personas[0].edad); // 42
console.log(personas[1].edad); // 25
console.log(personas[2].edad); // 21

let multiplicacion = function (a, b) {
    return a * b;
}
console.log(typeof multiplicacion); // function
console.log(multiplicacion(2, 5)); // 10
console.log(multiplicacion(3, 5)); // 15

let fechaP = new Date();
console.log(typeof fechaP); // Date
console.log(fecha); // Date