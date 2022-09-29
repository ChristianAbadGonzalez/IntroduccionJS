/* CADENAS DEL TIPO DE DATOS STRING */
const producto = 'Monitor de 20 pulgadas\"'; /* Manera de asignar un tamaño a una variable */
const tweet = 'Estamos delante de un programa de aprendizaje de JavaScript de los tipos de variables de datos';
const producto2 = 'Monitor de 30 pulgadas\"'; /* Manera de asignar un tamaño a una variable */
const email = 'correo@correo.com'

/* Otras formas de arquitectura de asignación del tipo de datos String */

/* const producto2 = String('Monitor de 30 pulgadas');*/
/*const producto3 = new String('Monitor de 40 pulgadas');*/

console.log(producto);
/* console.log(producto.length);*/ /* Propiedad para saber cuantos caracteres hemos escrito en la cadena de texto */
console.log(producto2); 

/* IndexOf */ /* Manera de saber en que psoición se encuentra la palabra que necesitamos encontrar en la cadena de caracteres */
/* Si en dicha extensión al visulizarlo por la consola nos sale un numero negativo como este "-1", eso nos quiere decir
   que dicha palabra en el formato o constate declarada no lo ha encontrado o bien porque no se ha declarado dicho string en la variable en cuestión */
console.log(tweet.indexOf('Javascript'));

/* Includes -- nos devuelve si dicha variable es "true" / "false" */
console.log(tweet.includes('Javascript'));

/* Manera de verificar si el correo es valido o no mediante filtración de los valores de la constante */
console.log(email.indexOf(email));