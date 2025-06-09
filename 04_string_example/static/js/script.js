// Uso de strings Ejemplo

function usarString() {

    let nombre = prompt("Ingrese cualquier nombre: "); // Variable tipo texto
    // Uso de length --->

    let primeraLetra = nombre[0];
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es: " + primeraLetra +
        "\nUltima letra es: " + ultimaLetra);
    // Mostrar Resultado
}

// Tarea: Imprimir segunda letra y penultima de el apellido

function manipularApellido() {
    
    let apellido = prompt("Ingrese cualquier apellido: ");

    let segundaLetra = apellido[1]
    let penultimaLetra = apellido[apellido.length - 2]
    alert("Segunda letra es : " + segundaLetra +
        "\nPenultima letra es : " + penultimaLetra);

}