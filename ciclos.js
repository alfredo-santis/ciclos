
//Estructuras de control: WHILE

1. 
/*

var numero = parseInt(prompt("Introduce un número:"));

// Inicializamos una variable para el contador
var i = 1;

// Usamos un bucle while para iterar desde 1 hasta el número ingresado por el usuario
while (i <= numero) {
    // Verificamos si el número es múltiplo de 5
    if (i % 5 === 0) {
        
        console.log(i);
    }
    
    i++;
}
*/

2. 
/*

var num1 = parseInt(prompt("Introduce el primer número entre 1 y 50:"));
var num2 = parseInt(prompt("Introduce el segundo número entre 1 y 50:"));

// Validar que los números estén en el rango de 1 a 50
while (isNaN(num1) || num1 < 1 || num1 > 50 || isNaN(num2) || num2 < 1 || num2 > 50) {
    alert("Por favor, introduce números válidos entre 1 y 50.");
    num1 = parseInt(prompt("Introduce el primer número entre 1 y 50:"));
    num2 = parseInt(prompt("Introduce el segundo número entre 1 y 50:"));
}

// Mostrar los números del 1 al 50
var i = 1;
while (i <= 50) {
    if (i === num1 || i === num2) {
        console.log(i + " ¡Lotería!");
    } else {
        console.log(i);
    }
    i++;
}
*/

3. 

/*
// Crear un arreglo para almacenar los números
var numeros = [];

// Usar un bucle while para capturar los números del usuario
while (true) {
    
    var input = prompt("Ingrese un número (Ingrese 0 para terminar):");

    // Convertir el valor ingresado a un número
    var numero = Number(input);

    // Verificar si el número ingresado es 0, en cuyo caso se termina la captura
    if (numero === 0) {
        break;
    }

    // Verificar si lo ingresado es un número
    if (!isNaN(numero)) {
        
        numeros.push(numero);
    } else {
                console.log("Por favor, ingrese un número válido.");
    }
}

console.log("Números capturados:", numeros);
*/
4. 

/*
// Función principal para capturar y concatenar palabras
function capturarPalabras() {
    // Declaración de variables
    let palabras = [];
    let palabra;
  
    // Bucle para capturar palabras hasta que se ingrese una cadena vacía
    while (true) {
      
      palabra = prompt("Ingresa una palabra (deja vacío y presiona Enter para terminar):");
  
      // Verifica si la palabra es una cadena vacía
      if (palabra === "") {
        break; // Sal del bucle si la entrada está vacía
      }
  
      // Agrega la palabra al arreglo
      palabras.push(palabra);
    }
  
    // Concatena todas las palabras capturadas
    let resultado = palabras.join(" ");
  
       alert("Las palabras capturadas son: " + resultado);
  }
  
    capturarPalabras();
 */ 
5. 

while (true) {
    let dia = prompt("Introduce un día de la semana:").toLowerCase();

    switch(dia) {
        case "lunes":
            alert("¡Feliz lunes! inicio de semana.");
            break;
        case "martes":
            alert("Es martes, el segundo día de la semana.");
            break;
        case "miércoles":
            alert("¡Es miércoles! Ombligo de la semana.");
            break;
        case "jueves":
            alert("¡Jueves! juebebes.");
            break;
        case "viernes":
            alert("¡Por fin viernes! ora de salir.");
            break;
        case "sábado":
            alert("Es sábado, a divertirse.");
            break;
        case "domingo":
            alert("Ve a descansar");
            
            break;
        default:
            alert("Día no válido, por favor introduce un día de la semana.");
    }

    // Termina el bucle si es domingo
    if (dia === "domingo") {
        break; 
    }
}
