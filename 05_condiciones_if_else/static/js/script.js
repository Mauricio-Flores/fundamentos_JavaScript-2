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

function validarUsuario() {
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
    if (edad >= 18 && edad < 100) {
        alert("Usted puede conducir.");
    } else if (edad < 18 && edad > 0 && licencia == "no") {
        alert("Usted no puede conducir.");
    } else {
        alert("Ingrese valores válidos.");
    };
};

function validarNumero() {
    let numero = parseInt(prompt("Ingrese su numero"))
    if (numero > 0) {
        alert(`Su numero es positivo`)
    } else if (numero < 0){
        alert(`Su numero es negativo`) }
    else if (numero === 0){
        alert(`Su numero es 0`)
        }
    else {
        alert("Ingrese un valor valido.")
    }

}   

/* 11. - Comparar la longitud de dos palabras
Solicita dos palabras con prompt().Compara cuántas letras tiene cada
 una y muestra cuál es más larga o si tienen el mismo largo. */

function palabraLarga() {
    let pal1 = prompt("Ingrese primera palabra:")
    let pal2 = prompt("Ingrese segunda palabra:")

    if (pal1 == "" && pal2 == "") {
        alert("Ingrese algún valor para trabajar...")
    } else if (pal1.length < pal2.length) {
        alert(`La palabra más larga es ${pal2} con ${pal2.length} carácteres`)
    } else if (pal1.length == pal2.length) {
        alert(`Las palabras ${pal2} y ${pal1} tienen mismo largo con:\n
        ${pal1.length} carácteres`)
    } else {
        alert(`La palabra más larga es ${pal1} con ${pal1.length} carácteres`)
    }
}


/* 12. - Validar correo electrónico
Pide al usuario que ingrese un correo.Verifica si
 el texto contiene el símbolo @.Si lo tiene, muestra "Correo válido", si no, "Correo inválido". */

function validarCorreo() {
    let email = prompt("Ingrese su correo electrónico:");

    if (email.includes("@")) {
        alert(`El correo ${email} es válido`);
    } else {
        alert(`El correo ${email} es inválido`);
    }
}


/* 13. - Verificar si un número es positivo o negativo
Solicita un número.Muestra si es positivo, negativo o cero. */

function verificarNumero() {
    let num = parseInt(prompt("Ingrese un número:"));

    if (num > 0) {
        alert("El número es positivo");
    } else if (num < 0) {
        alert("El número es negativo");
    } else if (num == 0) {
        alert("El número es cero");
    } else {
        alert("Ingrese un número");
    }
}

/* 14.- Saludo personalizado según hora
Pide la hora actual (en formato 24 horas). Si es antes de las 12, muestra
 "Buenos días", si es entre 12 y 18, "Buenas tardes", y si es mayor a 18, "Buenas noches".*/

function mostrarHora() {
    let hora = parseInt(prompt("Ingrese una hora:"));

    if (hora < 12) {
        alert("Buenos días");
    } else if (hora >= 12 && hora <= 18) {
        alert("Buenas tardes");
    } else {
        alert("Buenas noches")
    }
}

/* 15.- Verificar si una palabra contiene la letra "e"
Solicita una palabra. Verifica si contiene la letra "e" (minúscula). Si la tiene, muestra
 "Contiene la letra 'e'", si no, muestra "No contiene la letra 'e'". */

function mostrarLetra() {
    let palabra = prompt("Ingrese una palabra:");

    if (palabra == "e") {
        alert("Contiene la letra e");
    } else if (palabra !== "e") {
        alert("No contiene la letra e");
    } else {
        alert("Ingresar un valor válido")
    }
}



