//* Proyecto - Clase 04
//Declarar el array
let librosLeidos = [];
//Funcion para añadir libros
function AñadirLibro(titulo) {
    if (titulo && typeof titulo === "string") {
        librosLeidos.push(titulo);
        console.log(`"${titulo}" ha sido añadido a la lista de libros leidos.`);
    } else {
        console.log("Ingrese un título válido");
    }
}
//Funcion para mostrar libros leidos
function MostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("No hay libros leidos");
    } else {
        console.log("Libros leidos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        })
        }
 }
// Ejemplos de uso
AñadirLibro("Insoportable levedad del ser");
AñadirLibro("El principito");
AñadirLibro("Cien años de soledad");
AñadirLibro("1984");
AñadirLibro("El diario de Ana Frank");
AñadirLibro("IT");

MostrarLibrosLeidos();
