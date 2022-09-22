/* Variables con la denominacion 'LET' */

/* Esta forma de denominacionde variables -- ya no se utiliza */
let producto = 'Auriculares Gamer'; /* Inicialización de la variable con asignación de valor */

let disponible; /* Inicialización de la variable sin asignación del valor */

producto = true; /* Reasinación del valor de la variable */

disponible = true; /* Asignación del valor a la variable definida */

let producto1 = 'Ordenador',
    disponible1 = true,         /* Declaración y asignación multiple de variable con su correspondiente valor */
    categoria = 'Ordenadores';

/* Las asignación de variables no puede comenzar por caracteres numéricos -- ejemplo:   let 1disponible;*/

/* Sin embargo, tu a las variables las puedes caracterizar o asinarles el par de nombre + valor de la siguiente manera - let disponible_; */

/* Estilos para las Variables */
let nombre_producto = 'Monitor HD'  /* Variable con la denominación del tipo "underscore" */
let nombreProducto = 'Monitor HD'   /* Variable con la denominación del tipo "camelcase" - + Utilizada */
let NombreProducto = 'Monitor HD'   /* Variable con la denominación del tipo "pascalcase" */
let nombreproducto = 'Monitor HD'   /* Variable con la denominación del tipo "lowercase" */

/* Visulación del código en la consola del navegador con distinción de los nombres de la variables */
console.log(producto); /* console.log(PRODUCTO) - ¡ERROR EN LA CONSOLA! */