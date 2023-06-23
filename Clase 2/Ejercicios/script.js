// EJERCICIO 1: sumar(a, b)
//Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

// const sumar = (num1, num2) => {
//   return num1 + num2
// };

// sumar(2, 3) // 5
// sumar(1, 2); // 3

// EJERCICIO 2: restar(a, b)
//Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

// const restar = (num1, num2) => {
//   return num1 - num2
// };

// restar(3, 2) // 1
// restar(15, 10); // 5

// EJERCICIO 3: multiplicar(a, b)
//Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos  

// const multiplicar = (num1, num2) => {
//   return num1 * num2
// };

// multiplicar(2, 3) // 6
// multiplicar(2, 2); // 4

// EJERCICIO 4: dividir(a, b)
//Crear una función dividir que tome como argumentos dos números y devuelva la suma de ellos 

// const dividir = (num1, num2) => {
//   return num1 / num2
// };

// dividir(12, 3) // 4
// dividir(8, 2);

// EJERCICIO 5: esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es
// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

const esPar = (num) => {
  return (num % 2) === 0
};

esPar(2); // true

// EJERCICIO 6: esImpar(numero)
// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es
// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

const esImpar = (num) => {
  return (num % 2) === 1
}; 

esImpar(3); // true

// EJERCICIO 7: calcularAreaTriangulo(base, altura)
//Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

const calcularAreaTriangulo = (num1, num2) => {
  return (num1 * num2) / 2
};

calcularAreaTriangulo(3, 4) // 6
calcularAreaTriangulo(3, 4);

// EJERCICIO 8: gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

const gritar = (str) => {
    return `¡${str}!`
  }
  
  gritar('hola'); // ¡hola!
  gritar('aaaaaaaaaa'); // ¡aaaaaaaaaa!


// EJERCICIO 9: obtenerNombreCompleto(nombre, apellido)
//Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

const obtenerNombreCompleto = (nombre, apellido) => {
    return nombre + ' ' + apellido
  };
  
  obtenerNombreCompleto('Ada', 'Lovelace'); // Ada Lovelace

// EJERCICIO 10: saludar(nombre)
//Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya

const saludar = (nombre) => {
  return 'Hola ' + nombre + ', un gusto conocerte'
};

saludar('Ada'); // 'Hola Ada, un gusto conocerte'

//EJERCICIO 11: saludarGritando(nombre, apellido)
//Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación
 
const saludarGritando = (nombre, apellido) => {
  return '¡Hola ' + nombre + ' ' + apellido + ', un gusto conocerte!'
};

saludarGritando('Ada', 'Lovelace'); // ¡Hola Ada Lovelace, un gusto conocerte!

// EJERCICIO 12: obtenerDatosDeCiudad(nombre, poblacion, pais)
//Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string 

const obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
  return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`
  };
  
  obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina') 
  
  //const obtenerDatosDeCiudad = () => {
  //    let ciudad = 'Santa Fe';
  //    let poblacion = 545606;
  //    let pais = 'Argentina';
  //    return `La ciudad de ${ciudad} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`
  //};

  // EJERCICIO 13: convertirHorasEnSegundos(horas)
//Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

const convertirHorasEnSegundos = (horas) => {
  return horas * 3600 // una hora tiene 3600 segundos
};

convertirHorasEnSegundos(1) // 3600
convertirHorasEnSegundos(2);

// EJERCICIO 14: calcularPerimetroRectangulo(ancho, alto)
// Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro 

const calcularPerimetroRectangulo = (base, altura) => {
  return 2 * (base + altura)
};

calcularPerimetroRectangulo(10, 20) // 60
calcularPerimetroRectangulo(2, 2);

// EJERCICIO 15: calcularPorcentaje(numero, porcentaje)
//Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número 

const calcularPorcentaje = (num, porcentaje) => {
  return (num * porcentaje) / 100;
};

calcularPorcentaje(100, 5);

// EJERCICIO 16: sumarPorcentaje(numero, porcentaje)
// Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

const sumarPorcentaje = (num, porcentaje) => {
  return ((num * porcentaje) / 100) + num 
};

sumarPorcentaje(100, 50);

// EJERCICIO 17: restarPorcentaje(numero, porcentaje)
// Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar 

const restarPorcentaje = (num, porcentaje) => {
  return num - ((num * porcentaje) / 100)  
};

restarPorcentaje(100, 15) // 85

// EJERCICIO 18: calcularFPS(fps, minutos)
// FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos --> calcularFPS(1, 1) // 60

const calcularFPS = (fps, minutos) => {
  let minutosASegundos = minutos * 60;
  return fps * minutosASegundos;
};

calcularFPS(5, 5);

// EJERCICIO 19: obtenerCompetencia(a, b)
// Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b 

const obtenerCompetencia = (a, b) => {
  return `${a} vs. ${b}`
};

obtenerCompetencia('JavaScript', 'Pyhton');

// EJERCICIO 20: generarEmail(usuario, dominio)
// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com 

const generarEmail = (usuario, dominio) => {
  return `${usuario}@${dominio}.com`
};

generarEmail('adalovelace', 'hotmail'); // adalovelace@hotmail.com

// EJERCICIO 21: esMayorDeEdad(edad)
// Crear una función esMayorDeEdad que tome como argumento un número edad y devuelva true si es mayor de edad (18 o más) o false de lo contrario 
esMayorDeEdad(15) // false

// EJERCICIO 22: haceCalor(temperatura)
// Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace calor (22 grados o más) o false de lo contrario 
haceCalor(12) // false

// EJERCICIO 23: haceFrio(temperatura)
// Crear una función haceCalor que tome como argumento un número temperatura y devuelva true si hace frio (12 grados o menos) o false de lo contrario 
haceFrio(12) // true

//EJERCICIO 24: calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres numeros que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:
// fácil: 3 puntos
// normal: 5 puntos
// difícil: 10 puntos

const calcularPuntaje = (num1, num2, num3) => {
  let facil = num1 * 3; // cantidad de ejercicios resueltos * cuánto vale cada ejercicio realizado
  let normal = num2 * 5;
  let dificil = num3 * 10;
  return facil + normal + dificil;
};

calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40

// EJERCICIO 25: aceptaDeposito(monto)
// Crear una función aceptaDeposito que tome como argumento un número monto y devuelva true si el monto es divisible por 10 o false si no lo es

aceptaDeposito(440) // true 
aceptaDeposito(123) // false