var personas = [];

while (true) {
    var nombre = prompt("Ingrese el nombre de la persona (o 0 para finalizar):");
    if (nombre === "0") {
        break;
    }

    var apellido = prompt("Ingrese el apellido de la persona:");

    var notas = [];
    for (var j = 1; j <= 3; j++) {
        var nota = parseFloat(prompt("Ingrese la nota " + j + " de la persona:"));
        notas.push(nota);
    }

    var promedio = calcularPromedio(notas);

    var persona = {
        nombre: nombre,
        apellido: apellido,
        notas: notas,
        promedio: promedio
    };

    personas.push(persona);
}
alert("Presionaste 0, Fin carga de datos");

console.log(personas);

var mejorPromedio = personas.reduce((personaA, personaB) => personaA.promedio > personaB.promedio ? personaA : personaB);
alert("Mejor promedio: " + mejorPromedio.nombre + " "+ mejorPromedio.apellido + ", Promedio: " + mejorPromedio.promedio);

function calcularPromedio(notas) {
    var sumaNotas = 0;
    for (var i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    var promedio = sumaNotas / notas.length;
    return promedio;
}
