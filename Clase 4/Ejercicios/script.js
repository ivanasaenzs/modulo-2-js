// EJERCICIO 1: puedeVerPelicula(edad, tieneAutorizacion)
//Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres

// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if (edad >= 15) {
//       // console.log('se cumple la condicion y el usuario es mayor de edad');
//       return true
//     } else if (tieneAutorizacion) {
//       console.log('no es mayor de edad pero si se cumple la condicion de tener autorizacion');
//       return true
//     } else {
//      console.log('no se cumple ninguna condicion, el usuario no puede ver la pelicula');
//       return false
//     }
//   };
  
//   puedeVerPelicula(18, true);
//   puedeVerPelicula(14, false);
//   puedeVerPelicula(13, true);

  // EJERCICIO 2: estaEnRango(valor, minimo, maximo)
//Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

const estaEnRango = (valor, minimo, maximo) => {
  if (valor >= minimo) {
     return true
   } else if (valor <= maximo) {
     return true
   } else {
     return false
   }
 };

estaEnRango(3, 1, 10)   // true
estaEnRango(12, 1, 10)  // false

// EJERCICIO 3: puedeAvanzar(colorSemaforo)
// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

const puedeAvanzar = (color) => {
  if (color.toLowerCase() === 'verde') {
    return true
  } else if (color.toLowerCase() === 'rojo' || color.toLowerCase() === 'amarillo') {
    return false
  } else {
    return alert(`Error: color de semáforo ${color} es inválido`)
   }
}

puedeAvanzar('verde')     // true
puedeAvanzar('amarillo')  // false
puedeAvanzar('rojo')      // false
puedeAvanzar('lila')      // 'Error: color de semáforo inválido'

// // EJERCICIO 4: esVocal(letra)
// //Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

// esVocal('a') // true
// esVocal('n') // false

// // EJERCICIO 5: esConsonante(letra)
// //Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

// esVocal('a') // false
// esVocal('n') // true

// // EJERCICIO 6: esHoraValida(hora)
// //Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

// esHoraValida('12:23') // true
// esHoraValida('12:65') // false

// // EJERCICIO 7: puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// // Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

// puedeRenovarCarnet(true, true, true)    // false
// puedeRenovarCarnet(true, true, false)   // false
// puedeRenovarCarnet(true, false, true)   // true

// // EJERCICIO 8: puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
// //Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

// puedeGraduarse(80, 50, true)  // true
// puedeGraduarse(80, 50, false) // false

// // EJERCICIO 9: esParOImpar(numero)
// //Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

// esParOImpar(3)  // 'impar'
// esParOImpar(10) // 'par'

// // EJERCICIO 10: esPositivoONegativo(numero)
// //Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

// esPositivoONegativo(3)  // 'positivo'
// esPositivoONegativo(-5) // 'negativo'

// // EJERCICIO 11: avanzarSemaforo(colorActual)
// //Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'

// // EJERCICIO 12: obtenerDiasMes(mes)
// //Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

// obtenerDiasMes("diciembre") // 31
// obtenerDiasMes("febrero")   // 29

// // EJERCICIO 13: obtenerGeneracion(anioNacimiento)
// //Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// // Generación	Años de nacimiento
// // Baby boomer	1949-1968
// // Generación X	1969-1980
// // Millennials	1981-1993
// // Generación Z	1994-2010

// // EJERCICIO 14: obtenerSensacion(temperatura)
// // Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

// // Temperatura	Mensaje
// // Menor a 0°	¡Está helando!
// // Mayor o igual a 0° y menor a 15°	¡Hace frío!
// // Mayor o igual a 15° y menor a 25°	Está lindo
// // Mayor o igual a entre 25° y menor a 30°	Hace calor
// // Mayor o igual de 30°	¡Hace mucho calor!

// obtenerSensacion(33) // "¡Hace mucho calor!"

// // EJERCICIO 15: obtenerNota(puntaje)
// // Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

// // Puntaje	                                    Nota
// // Menor a 6	                                Desaprobado
// // Mayor o igual a 6 y menor a 7	            Regular
// // Mayor o igual a 7 y menor a 8	            Bueno
// // Mayor o igual a entre 8 y menor a 10	    Muy bueno
// // 10	                                        Excelente
// // Menor a 0 o mayor a 10	                    Puntaje inválido

// obtenerNota(7)    // "Bueno"
// obtenerNota(9.6)  // "Excelente"
// obtenerNota(12)   // "Puntaje inválido"

// // EJERCICIO 16: jugarPiedraPapelTijera(a, b)
// //Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
// jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!