function pedirEdad() {
    let edad = parseInt(prompt("Ingresa tu edad: "));
    if (edad < 0) {
        alert("El dato que ingresaste es incorrecto")
    } else if (edad < 14) {
        alert("Eres un niño")
    } else if (edad > 13 && edad < 18) {
        alert("Eres adolecente")
    } else if (edad > 17 && edad < 120) {
        alert("Eres un adulto")
    } else {
        alert("El dato ingresado es incorrecto")
    }
}

function ingresarContraseña() {
    let pass = "12345";
    let youpass = prompt("Ingresa tu contraseña: ");
    if (youpass === pass) {
        alert("La contraseña ingresada es correcta")
    } else {
        alert("la contraseña ingresada es incorrecta")
    }
}

function verificarE() {
    let palabra = prompt("Ingresa la palabra: ");
    if (palabra.toLowerCase().includes('e')) {
        alert("Tu palabra tienes una e")
    } else {
        alert("Tu palabra no tiene una e")
    }
}

function conpararDosNumeros() {
    let num1 = parseInt(prompt("ingresa un numero: "));
    let num2 = parseInt(prompt("ingresa un segundo numero: "));
    if (num1 > num2) {
        alert('el numero ' + num1 + ' es mayor que ' + num2)
    } else if (num1 < num2) {
        alert('el numero ' + num1 + ' es menor que ' + num2)
    } else {
        alert('el numero ' + num1 + ' es igual que ' + num2)
    }
}

function determinarParImpar() {
    let num = parseInt(prompt("ingresa un numero: "));
    if (num % 2 == 0) {
        alert("Tu numero es par")
    } else {
        alert("Tu numero es impar")
    }
}

function palabraInicial() {
    let pal = prompt("Ingresa una palabra: ")
    if (pal[0].toLowerCase() === 'a') {
        alert("La pabra " + pal + ' contiene una "a" al inicio')
    } else {
        alert("La pabra " + pal + ' no contiene una "a" al inicio')
    }
}

function pedirTemperatura() {
    let temp = parseInt(prompt("Ingresa la temperatura"))
    if (temp < 10) {
        alert("Hace frio")
    } else if (temp > 9 && temp < 26) {
        alert("Clima Templado")
    } else {
        alert("Hace calor")
    }
}

function pedirNombre() {
    let nombre = prompt("Ingresa palabra");
    nombre = nombre.toUpperCase();
    if (nombre == "DANY") {
        alert("Bienvenido Profesor")
    } else if (nombre == "ELI") {
        alert("Bienvenido mamá")
    } else {
        alert("Bienvenido visitante")
    }
}

function ingresaPromedio() {
    let num = prompt("Ingresa tu promedio");
    if (num < 1) {
        alert("El valor ingresado es incorrecto")
    } else if (num > 7) {
        alert("El valor ingresado es incorrecto")
    } else if (num < 4) {
        alert("Reprobado")
    } else {
    alert("Aprobado")
    }
}

function palabraClave() {
    let frase = prompt("Ingresa una frase");
    if (frase.toLowerCase().includes('jesus')) {
        alert("Tu palabra tiene la pabra clave")
    } else {
        alert("Tu palabra no tiene la palabra clave")
    }
}