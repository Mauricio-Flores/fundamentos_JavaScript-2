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

function validarContraseña(){
    let clave = "1234"
    let pass = prompt("ingrese contraseña: ");
//Condición estructura if - else
if(pass == clave){
    alert("Acceso permitido...")
} else {
    alert("Acceso denegado...")
}
}

/*Verificar par o impar
 Pide un número por prompt(). Evalúa si el número es par o impar y 
 muestra el resultado con alert().*/

 function ParImpar(){
    let num = parseInt(prompt("ingrese num par:" ));
if(){}
 }



