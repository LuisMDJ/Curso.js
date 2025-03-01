// Definir un constructor de objeto para el libro
function Libro(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = []; // Lista de capítulos
    // Método para describir el libro
    this.describirLibro = function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    };
    // Método para agregar un capítulo
    this.agregarCapitulo = function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    };
    // Método para eliminar un capítulo
    this.eliminarCapitulo = function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`El capítulo "${capitulo}" no se encontró en el libro "${this.titulo}".`);
        }
    };
    // Método para mostrar todos los capítulos
    this.mostrarCapitulos = function() {
        if (this.capitulos.length === 0) {
            console.log(`El libro "${this.titulo}" no tiene capítulos registrados.`);
        } else {
            console.log(`Capítulos del libro "${this.titulo}":`);
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        }
    };
}
// Creación de un libro de ejemplo
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
// Mostrar información del libro
libro1.describirLibro();
// Agregar capítulos
libro1.agregarCapitulo("Capítulo 1 - La Fundación de Macondo");
libro1.agregarCapitulo("Capítulo 2 - El linaje de los Buendía");
// Mostrar los capítulos
libro1.mostrarCapitulos();
// Eliminar un capítulo
libro1.eliminarCapitulo("Capítulo 1 - La Fundación de Macondo");
// Mostrar capítulos después de eliminar uno
libro1.mostrarCapitulos();
