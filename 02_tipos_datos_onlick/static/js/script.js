// Declaración de variables
let anioNacimiento = 2008;
let promedioEstudiante = 6.5;
let quePasaPibe = "Que pasa Pibe";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("Año de Nacimiento: " + anioNacimiento);
}

function mostrarPromedio() {
  alert("Número Promedio de Estudiante: " + promedioEstudiante);
}

function mostrarQuePasaPibe() {
  alert("Que pasa Pibe: " + quePasaPibe);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
