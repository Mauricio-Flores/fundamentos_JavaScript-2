//Ejercicios condiciones IF-ELSE
console.log("Conexion con js establecida...");

/*Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar 
(18 años o más) o no.
*/

function edadVotar() {
    let edad = parseInt(prompt("ingrese su edad: "));
    //Input conversión string a numero
    //Condicion IF - else if - else
    if (edad >= 18) {
        alert("su edad " + edad + "aprobado para votar.")
    } else if (edad >= 0 && edad < 18) { //&& compuerta AND
        alert("su edad" + edad + "no esta aprobada para votar. ")
    } else {
        alert("Ingrese valor valido")
    }
};

/*Contraseña válida
 Pide una contraseña con prompt(). Si es igual a "1234"
 , muestra un mensaje de acceso permitido. En caso contrario, muestra acceso denegado.*/

function validarContraseña() {
    let clave = "1234"
    let pass = prompt("ingrese contraseña: ");
    //Condición estructura if - else
    if (pass == clave) {
        alert("Acceso permitido...")
    } else {
        alert("Acceso denegado...")
    }
}

/*Verificar par o impar
 Pide un número por prompt(). Evalúa si el número es par o impar y 
 muestra el resultado con alert().*/

function parImpar() {
    let numero = parseInt(prompt("ingrese num par:"));
    if (numero % 2 == 0) {
        alert("Es par");
    } else {
        alert("Es impar")
    }
}

/*Temperatura ambiental
 Solicita la temperatura actual. Si es mayor o igual a 30, muestra “Hace calor”, 
 de lo contrario muestra “Clima agradable”.*/

function temperaturaAmbiental() {
    let temperatura = parseInt(prompt("Ingresar temperatura:  "));
    if (temperatura >= 15 && temperatura <= 50) {
        alert("Hace calor")
    } else if (temperatura >= 15 && temperatura < 30) {
        alert("Agradable")
    } else if (temperatura <= -5 && temperatura < 15) {
        alert("Hace frio")
    } else {
        alert("Ingrese un valor")
    }
};

/*Comparar dos números
Solicita dos números al usuario. Compara ambos y muestra cuál es mayor o si son iguales.*/

function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar el primer número"));
    let num2 = parseInt(prompt("Ingresar el segundo numero"));

    if (num1 < num2) {
        alert("el numero " + num1 + "es menor que " + num2);
    } else if (num1 == num2) {
        alert("el numero " + num1 + "es igual que " + num2);
    } else {
        alert("el numero " + num1 + "es mayor que " + num2);
    }
};

/*Calificación escolar
 Pide una nota entre 1 y 7. Si es 4 o más, 
 muestra “Aprobado”, si es menor, muestra “Reprobado”.*/

function calificacionEscolar() {
    let calificacion = parseInt(prompt("Ingrese su nota:  "));

    if (calificacion < 4) {
        alert("Reprovado")
    } else if (calificacion >= 4 % calificacion <= 7) {
        alert("Aprovado")
    } else {
        alert("Ingresar valor")
    }
};

/*Nombre de usuario válido
Pide un nombre de usuario. Si el valor ingresado es
 "admin", muestra “Bienvenido, administrador”. Si no, muestra “Usuario no reconocido”.*/

function comprobarUsuario() {
    let usuario = prompt("Ingrese su usuario: ");
    if (usuario == "admin") {
        alert("Bienvenido, administrador..")
    } else if (usuario !== "admin") {
        alert("usuario no reconocido")
    } else {
        alert("Ingrese usuario")
    }

}

// Verificar si una palabra empieza con "A"
//Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.

function letraMayuscula() {
    // Input string
    let texto = prompt("Ingresa una palabra: ");
    // Condición IF - ELSE IF - ELSE
    if (texto[0] == "A") {
        alert("La palabra empieza con la letra A");
    } else {
        alert("La palabra no empieza con la letra A mayúscula");
    };
};

/* Precio con descuento
 Solicita el precio de un producto. 
 Si el precio es mayor a 10000, muestra que aplica descuento. 
 Si no, indica precio normal. */

function descuentoPrecio() {
    // Input conversión string a número
    let precio = parseFloat(prompt("Ingresa el precio total: "));
    // Condición IF - ELSE IF - ELSE
    if (precio > 10000) {
        alert("Se aplicará el descuento");
    } else if (precio <= 10000 && precio > 0) {
        alert("No se aplicará descuento");
    } else {
        alert("Ingrese un precio válido");
    };
};

/* Verificar si una persona puede conducir
 Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no").
 Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. 
 Si no, muestra “No puede conducir”. */

function licenciaEdad() {
    // Input conversión string a número
    let edad = parseInt(prompt("Ingrese su edad: "));
    // Input string
    let licencia = prompt('¿Tienes licencia de conducir? (Ingresa "si" o "no" sin mayúsculas ni espacios)');
    // Condición IF - ELSE IF - ELSE
    if (edad >= 18 && licencia == "si") {
        alert("Usted puede conducir.");
    } else if (edad < 18 && edad > 0 && licencia == "no") {
        alert("Usted no puede conducir.");
    } else {
        alert("Ingrese valores válidos.");
    };
};

/*11.- Comparar la longitud de dos palabras
Solicita dos palabras con prompt(). Compara cuántas letras tiene cada una y muestra cuál es más larga o si tienen el mismo largo.*/

function compararLongitud() {
    let Longitud = prompt ('Ingresa dos letras')

    if(kfhsd)
}







