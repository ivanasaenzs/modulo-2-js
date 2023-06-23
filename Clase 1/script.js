// JAVASCRIPT: Lenguaje NO tipado. Variables aceptan cualquier valor
// variable ---> espacio de memoria donde se guarda un dato (información que se almacena)
alert('Soy una alerta');

var nombre = 'Ivana';
nombre = 'Marlene'; // ahora nombre tiene un nuevo valor
// var ya no se usa
let apellido = 'Saenz Samaniego';
console.log(apellido);
const mensaje = 'mensaje de prueba';
apellido = 'Newman'; // le cambié el valor a apellido
console.log(apellido);

// TIPOS DE DATOS
// datos primitivos:
// string = cadena de caracteres
// number = números
// boolean = true / false
// null = valor vacio
// undefined = variable declarada pero sin valor
// NaN = not a number

let uno = 1;
let dos = '2';
let tres;

console.log(tres); // UNDEFINED. variable creada pero no inicializada

///
 // let name = prompt('Ingresa tu nombre', 'nombre') ---> segundo parámetro equivalente al"placeholder"/valor default
// let lastName = prompt('Ingresa tu apellido', 'apellido')
// let age = prompt('Ingresa tu edad', 'edad')

// console.log('nombre', name)
// console.log('apellido', lastName);
// console.log('edad', age)

// alert(`Hola ${name}`)  

///

// TEMPLATE STRING
// `` --> ctrl + alt + }
alert(`Hola ${nombre}`)

let primerNumero = prompt('Ingrese un número', ''); // por default los prompt devuelven STRINGS 
let segundoNumero = prompt('Ingrese un número para ser sumado', '');
let resultado = Number(primerNumero) - Number(segundoNumero);

alert(`El resultado es ${resultado}`);