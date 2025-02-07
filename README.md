Este proyecto se centra en el uso de tipos de datos en JavaScript, diferenciando entre primitivos y compuestos. El objetivo es que el usuario aprenda a declarar, asignar e imprimir estos datos en la consola, comprendiendo su naturaleza y cómo se utilizan en la programación.

Tipos de Datos en JavaScript:

A. Datos Primitivos:
Los datos primitivos son los valores más básicos en JavaScript y no pueden ser modificados una vez asignados. Se han trabajado los siguientes:

string (Cadenas de texto):
Representan secuencias de caracteres.
Ejemplo:
let nombre = "Sergio";
console.log(typeof nombre); // string

number (Números):
Representan valores numéricos, incluyendo enteros y decimales.
Ejemplo:
let edad = 42;
console.log(typeof edad); // number

boolean (Booleanos):
Representan valores lógicos (true o false).
Ejemplo:
let esMayor = true;
console.log(typeof esMayor); // boolean

undefined (Indefinido):
Se usa cuando una variable ha sido declarada pero no tiene un valor asignado.
Ejemplo:
let dinero;
console.log(typeof dinero); // undefined

null (Nulo):
Representa la ausencia intencional de un valor.
Ejemplo:
let cuentas = null;
console.log(typeof cuentas); // object 

symbol (Símbolos únicos):
Se usa para crear identificadores únicos.
Ejemplo:
let id = Symbol("id");
console.log(typeof id); // symbol

Infinity (Infinito):
Representa un número infinito.
Ejemplo:
let numeroGrande = Infinity;
console.log(typeof numeroGrande); // number

B. Datos Compuestos
Los datos compuestos pueden almacenar múltiples valores y permiten estructurar la información. Se han trabajado los siguientes:

Objetos (Object):
Agrupan información en pares clave-valor.
Ejemplo:
let animal = {
    nombre: "Perro",
    raza: "Pastor Alemán",
    edad: 2
};
console.log(typeof animal); // object

Arrays (Array):
Son listas ordenadas de elementos.
Ejemplo:
let numerosPrimos = [3, 5, 7, 11];
console.log(typeof numerosPrimos); // object (los arrays son un tipo de objeto)

Arrays de Objetos:
Son listas de objetos, útiles para representar conjuntos de datos.
Ejemplo:
let personas = [
    { nombre: "Sergio", edad: 42 },
    { nombre: "Ezequiel", edad: 25 }
];
console.log(typeof personas); // object

Funciones (Function):
Son bloques de código reutilizables.
Ejemplo:
let multiplicar = function(a, b) {
    return a * b;
};
console.log(typeof multiplicar); // function

Fechas (Date):
Se usan para manejar fechas y horas.
Ejemplo:
let fecha = new Date();
console.log(typeof fecha); // object

¿Qué se ha aprendido?:

Diferenciar entre datos primitivos y datos compuestos.
Declarar variables con diferentes tipos de datos.
Usar typeof para identificar el tipo de dato.
Imprimir valores en la consola con console.log().
Manipular estructuras de datos como objetos, arrays y funciones.

Conclusión:

Este ejercicio ha permitido comprender cómo funcionan los tipos de datos en JavaScript y su aplicación práctica. Con este conocimiento, se pueden construir estructuras más complejas y optimizar el manejo de datos en cualquier aplicación.


