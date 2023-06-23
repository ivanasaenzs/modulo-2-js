// EJERCICIO 1: Saludo
// Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido}, bienvenida a Ada".

// let name = prompt('Ingrese su nombre', '');
// let lastName = prompt('Ingrese su apellido', '');
// alert(`Hola ${name} ${lastName}, bienvenida a Ada`);

// EJERCICIO 2: Heladería
// Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

// let gustoUno = prompt('Ingresa tu primer sabor de helado', '');
// let gustoDos = prompt('Ingresa tu segundo sabor de helado', '');
// let gustoTres = prompt('Ingresa tu tercer sabor de helado', '');
// alert(`Aquí tiene su helado de ${gustoUno}, ${gustoDos} y ${gustoTres}`);

// EJERCICIO 3: Datos personales
// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos

// let name = prompt('Ingresa tu nombre', '');
// let lastName = prompt('Ingresa tu apellido', '');
// let nationality = prompt('Ingresa tu nacionalidad', '');
// alert(`Nuevo usuario agregado al sistema: ${name} ${lastName}, ${nationality}`);

// EJERCICIO 4: Lista de reproducción
// Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'"

// let playlist = prompt('Ingrese el nombre de la playlist', '');
// let songOne = prompt('Ingrese el título de una canción', '');
// let songTwo = prompt('Ingrese el título de una segunda canción', '');
// let songThree = prompt('Ingrese el título de una tercera canción', '');
// alert(`Se ha creado la playlist "${playlist}" con las canciones "${songOne}", "${songTwo}" y "${songThree}"`);

// EJERCICIO 5: Dirección completa
// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

// let calle = prompt('Ingrese el nombre de su calle', '');
// let nroCalle = prompt('Ingrese la altura de la calle', '');
// let nroDepto = prompt('Ingrese el número de su departamento', '');
// let codPostal = prompt('Ingrese su código postal', '');
// let ciudad = prompt('Ingrese su ciudad', '');
// let pais = prompt('Ingrese su país', '');
// alert(`La dirección que ha ingresado es: ${calle} ${nroCalle}, ${nroDepto}, ${codPostal}, ${ciudad} ${pais}`);

// EJERCICIO 6: Años perro
// Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

// let edad = prompt('Ingresa tu edad');
// const edadPerro = 7; // un año humano equivale a aprox 7 años de perro
// let resultado = Number(edad) * edadPerro;
//console.log(resultado);
// alert(`El equivalente a ${edad} en años perro es ${resultado} años`);

// EJERCICIO 7: Minutos a segundos
// Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos

// let minutes = prompt('Ingresar una cantidad de minutos', '');
// const seconds = 60;
// let resultado = Number(minutes) * seconds;
// console.log(resultado);
// alert(`${minutes} minutos equivalen a ${resultado} segundos`);

// EJERCICIO 8: Días a segundos
// Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos

// let days = prompt('Ingresar una cantidad de días', '');
// const seconds = 86400; // 86400 segundos en un día
// let resultado = Number(days) * seconds;
// alert(`${days} días son ${resultado} segundos`);

// EJERCICIO 9: Kilómetros a millas
//Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.

// let kilometros = prompt('Ingresar una cantidad de kilómetros', '');
// const millas = 0.621371;
// let resultado = Number(kilometros) * millas;
// alert(`${kilometros} kilómetros son ${resultado} millas`);

// EJERCICIO 10: Área de un triangulo
// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

// let base = prompt('Ingresá el valor de la base del triángulo', '');
// let altura = prompt('Ingresá el valor de la altura del triángulo', '');
// const resultado = (Number(base) * altura) / 2;
//alert(`El resultado del área del triángulo con base ${base} y altura ${altura} es: ${resultado}`);

// EJERCICIO 11: Perímetro de un rectángulo
// Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

//let base = prompt('Ingresá el valor de la base del rectángulo', '');
//let altura = prompt('Ingresá el valor de la altura del rectángulo', '');
//let resultado = 2 * Number(base) + 2 * Number(altura);
//alert(`El resultado del perímetro del rectángulo con base ${base} y altura ${altura} es: ${resultado}`);

// EJERCICIO 12: Porcentaje
// Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.

//let numero = prompt('Ingresá un número', '');
//let porcentaje = prompt('Ingresá un porcentaje', '');
//const resultado = (Number(numero) * porcentaje) / 100;
//alert(`El porcentaje ${porcentaje} del número ${numero} es: ${resultado}`);

// EJERCICIO 13: Tiempo de viaje
// Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).
// Las velocidades de los medio de transporte son: a pie : 5 km/hs | bicicleta : 10km/hs | auto: 50km/hs

//let distancia = prompt('Ingresá la distancia del recorrido', '');
//const resultadoEnBicicleta = Number(distancia) / 10;
//const resultadoAPie = Number(distancia) / 5;
//const resultadoEnAuto = Number(distancia) / 50;
//alert(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`);

// EJERCICIO 14: Duración vuelo
// Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

//let escalaUno = prompt('¿Cúal es la primer escala?', '');
//let duracionEscalaUno = prompt('¿Cúal es la duración de la primer escala?', '');
//let escalaDos = prompt('¿Cúal es la segunda escala?', '');
//let duracionEscalaDos = prompt('¿Cúal es la duración de la segunda escala?', '');
//let escalaTres = prompt('¿Cúal es la tercer escala?', '');
//let duracionEscalaTres = prompt('¿Cúal es la duración de la tercer escala?', '');
//const resultado = Number(duracionEscalaUno) + Number(duracionEscalaDos) + Number(duracionEscalaTres);
//alert(`La duración total del vuelo con escala en ${escalaUno} de duración ${duracionEscalaUno} hs, ${escalaDos} de duración ${duracionEscalaDos} hs y ${escalaTres} de duración ${duracionEscalaTres} hs es: ${resultado} hs.`);

// EJERCICIO 15: Incremento
// Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.)

//let numero = prompt('Ingresá un número', '');
//let cantidad = prompt ('Ingresá una cantidad', '');
//let resultado = Number(numero) + Number(cantidad);
//let resultadoDos = resultado + Number(cantidad);
//let resultadoTres = resultadoDos + Number(cantidad);
//let resultadoCuatro = resultadoTres + Number(cantidad);
//let resultadoCinco = resultadoCuatro + Number(cantidad);
//alert(`Incremento 1: ${resultado}`);
//alert(`Incremento 2: ${resultadoDos}`);
//alert(`Incremento 3: ${resultadoTres}`);
//alert(`Incremento 4: ${resultadoCuatro}`);
//alert(`Incremento 5: ${resultadoCinco}`);

// EJERCICIO 16: Celsius a Fahrenheit
// Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit
// FÓRMULA CELSIUS A FAHRENHEIT: 1.8 * cantidad de grados Celsius + 32

//let celsius = prompt('Ingresá una temperatura en °C', '');
//const fahrenheit = 33.8;
//let resultado = 1.8 * celsius + 32;
//alert(`La conversión de ${celsius}°C a Fahrenheit es: ${resultado}°F`);

// EJERCICIO 17: Múltiplos
// Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO

//let primerNumero = prompt('Ingresá el primer número');
//let segundoNumero = prompt('Ingresá el segundo número');
//let resultado = Number(primerNumero) % segundoNumero === 0;
//alert(`El número ${primerNumero} es múltiplo de ${segundoNumero}: ${resultado}`);

// EJERCICIO 18: Segundos a horas, minutos y segundos
// Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

// EJERCICIO 19: Cantidad de caracteres
// Crear un programa que pida al usuario ingresar un texto y muestre un mensaje con la cantidad de caracteres que tiene ese texto. INVESTIGAR CÓMO HACERLO

// EJERCICIO 20: Cantidad de huéspedes
// Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar

// let dosPersonas = prompt('Ingresá cuantas habitaciones para dos personas tiene el hotel');
// let tresPersonas = prompt('Ingresá cuantas habitaciones para tres personas tiene el hotel');
// let cuatroPersonas = prompt('Ingresá cuantas habitaciones para cuatro personas tiene el hotel');
// let totalDosPersonas = dosPersonas * 2;
// let totalTresPersonas = tresPersonas * 3;
// let totalCuatroPersonas = cuatroPersonas * 4;
// const resultado = totalDosPersonas + totalTresPersonas + totalCuatroPersonas;
// alert(`El hotel tiene una capacidad de ${resultado} personas`);

// EJERCICIO 21:Calculador gastos
// Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

//let montoDisponible = prompt('¿Cuál es tu monto disponible?', '');
//let servicio1 = prompt('¿Cuál es el nombre primer servicio?', '');
//let montoServicio1 = prompt('¿Cuál es el monto del primer servicio?', '');
//let servicio2 = prompt('¿Cuál es el nombre segundo servicio?', '');
//let montoServicio2 = prompt('¿Cuál es el monto del segundo servicio?', '');
//let servicio3 = prompt('¿Cuál es el nombre tercer servicio?', '');
//let montoServicio3 = prompt('¿Cuál es el monto del tercer servicio?', '');
//let saldoRestante = Number(montoDisponible) - (Number(montoServicio1) + Number(montoServicio2) + Number(montoServicio3));
//alert(`Los servicios a pagar son ${servicio1} de $${montoServicio1}, ${servicio2} de $${montoServicio2}, ${servicio3} de $${montoServicio3}, queda disponible un saldo de $${saldoRestante}`);

// EJERCICIO 22: Orden de compras
// Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables

let cantidadDeMouse = prompt('Ingresá la cantidad de mouse que deseas comprar');
let cantidadDeTeclados = prompt('Ingresá la cantidad de teclados que deseas comprar');
let cantidadAuriculares = prompt('Ingresá la cantidad de auriculares que deseas comprar');
let cuotas = prompt('Ingresá la cantidad de cuotas');

const precioDeMouse = 400;
const precioDeTeclado = 800;
const precioDeAuriculares = 1500;

let precioTotalDeMouse = precioDeMouse * Number(cantidadDeMouse);
let precioTotalDeTeclados = precioDeTeclado * Number(cantidadDeTeclados);
let precioTotalAuriculares = precioDeAuriculares * Number(cantidadAuriculares);
let precioTotal = precioTotalDeMouse + precioTotalDeTeclados + precioTotalAuriculares;
const precioPorCuota = precioTotal / Number(cuotas);

alert(`El detalle de la compra es: mouse ${cantidadDeMouse} x $400 $${precioTotalDeMouse}, teclado ${cantidadDeTeclados} x $800 $${precioTotalDeTeclados}, auriculares ${cantidadAuriculares} x $1500 $${precioTotalAuriculares}. El total es $${precioTotal} en ${cuotas} cuotas de $${precioPorCuota}`);
