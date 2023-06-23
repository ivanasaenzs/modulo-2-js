let marca = 'Fiat';
let nombrePersona = 'Marian';

// cuando declaro una función, entre () recibe PARÁMETROS para que pueda funcionar
function saludar(nombrePersona) {
    console.log('¡Hola ' + nombrePersona + '!'); 
}

console.log(marca);

saludar(nombrePersona); // cuando la invoco, para que haga su trabajo, recibe entre () un ARGUMENTO

// parámetros
const sumar = (perro, gato) => {
    return perro + gato
}

// argumento
sumar(5, 10)

// ARROW FUNCTIONS
let primerNumero = prompt('primer numero');
let segundoNumero = prompt('segundo numero');

const suma = (num1, num2) => {
    return (Number(num1) + Number(num2)); // RETURN corta la ejecución de una función 
}

suma(primerNumero, segundoNumero); // ---> parámetros


// const typeOf = (variable) => {
//     '- chequear que tipo de dato es' variable
//     '-Devolver el tipo de dato'
// }


// const prompt = (mensaje, valorDefault) => {
//     '- abrir un modal con un' mensaje 'y un input con un' valorDefault;
//     '-tomar el' valorDefault 'del input';
//     '-validar que el dato ingresado sea un numero'
//     '-devolver' valorDefault;
// }


// const suma = (num1, num2) => {
//   return Number(num1 - num2)
// };

// suma(primerNumero, segundoNumero);


// gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// gritar('hola') // ¡hola!
// gritar('aaaaaa') // ¡aaaaaa!


// const gritar = (str) => {
//     return `¡${str}!`
// }

// console.log(gritar('hola'));
// console.log(gritar('aaaaaaaaaa'));
// console.log(gritar('cocooooo'));


// obtenerDatosDeCiudad(nombre, poblacion, pais)
// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

console.log('soy un console log en la linea 71');

const obtenerDatosDeCiudad = () => {
    let ciudad = prompt('Ingrese su ciudad');
    let habitantes = Number(prompt('Ingrese cantidad de habitantes'));
    let country = prompt('Ingrese el pais');
    return `La ciudad de ${ciudad} tiene una población de ${habitantes} habitantes y está ubicada en ${country}`
};


console.log('hola');


console.log(obtenerDatosDeCiudad());