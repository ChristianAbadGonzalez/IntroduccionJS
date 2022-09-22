/* Variables con la denominacion 'CONST' */

/* Esta forma de denominacionde variables -- ya no se utiliza */
const producto = 'Auriculares Gamer'; /* Inicialización de la variable con asignación de valor */

/* const disponible; */  /* JavaScript bajo la denominación/asignación de variables mediante el método de "const" no permite asignarle el valor en un momento futuro */
let disponible;

disponible = true; /* Asignación del valor a la variable definida */

const producto1 = 'Ordenador',
    disponible1 = true,         /* Declaración y asignación multiple de variable con su correspondiente valor */
    categoria = 'Ordenadores';

/* Las asignación de variables no puede comenzar por caracteres numéricos -- ejemplo:   const 1disponible;*/

/* Sin embargo, tu a las variables las puedes caracterizar o asinarles el par de nombre + valor de la siguiente manera - const disponible_ = true; */

/* Estilos para las Variables */
const nombre_producto = 'Monitor HD'  /* Variable con la denominación del tipo "underscore" */
const nombreProducto = 'Monitor HD'   /* Variable con la denominación del tipo "camelcase" - + Utilizada */
const NombreProducto = 'Monitor HD'   /* Variable con la denominación del tipo "pascalcase" */
const nombreproducto = 'Monitor HD'   /* Variable con la denominación del tipo "lowercase" */

/* Visulación del código en la consola del navegador con distinción de los nombres de la variables */
console.log(producto); /* console.log(PRODUCTO) - ¡ERROR EN LA CONSOLA! */