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
console.log(typeof nombreP);
console.log(typeof apellidoP);
console.log(typeof nacionalidadP);
console.log(typeof edadP);
console.log(typeof añoNacimiento);
console.log(typeof esMayordeEdadX);
console.log(typeof esGeneracionZ);
console.log(typeof dinero);
console.log(typeof cuentas);
console.log(typeof ids);
console.log(typeof numeroGrandeX);
// Imprimir en la consola
console.log(nombreP);
console.log(apellidoP);
console.log(nacionalidadP);
console.log(edadP);
console.log(añoNacimiento);
console.log(esMayordeEdadX);
console.log(esGeneracionZ);
console.log(dinero);
console.log(cuentas);
console.log(ids);
console.log(numeroGrandeX);

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