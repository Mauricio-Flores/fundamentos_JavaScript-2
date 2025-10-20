console.log("Conexión exitosa...")

/* 
Contar numero del 10 al 1 - ejemplo
*/
// Creación de función bucle While
function ejecutarWhile() {
    let = resultado = "El resultado es: ";
    let = count = 10;
    while (count > 0) {
        resultado += `${count} - `;
        count--
    }
    alert(resultado);
}

// Creación de función bucle For
function ejecutarFor() {
    let = resultado = "El resultado es: ";
    for (let i = 10; i > 0; i--) {
        resultado += `${i} - `
    }
    alert(resultado);
}

/*  
Bucle while: Imprimir del 1 a n (n es ingresado por teclado).
Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert. 
*/

function bucleWhile1() {
    let resultado = "Contamos: " 
    let n = parseInt(prompt("Ingresar numero: "));
    let numero = 1;
    while (numero <= n) {
        resultado += `- ${numero} `
        console.log(numero)
        numero ++;
    }
    alert(resultado)
}