
document.addEventListener('DOMContentLoaded', function () {
    const listaProductos = document.getElementById('lista-productos');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    const botonComprar = document.getElementById('boton-comprar');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Actualizar el carrito visualmente
    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach(function (producto) {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${producto.nombre} - $${producto.precio}`;
            listaCarrito.appendChild(li);
            total += producto.precio;
        });

        totalElemento.textContent = total;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Agregar producto al carrito
    function agregarAlCarrito(evento) {
        const producto = evento.target;
        const productoSeleccionado = {
            id: producto.getAttribute('data-id'),
            nombre: producto.getAttribute('data-nombre'),
            precio: parseInt(producto.getAttribute('data-precio'))
        };
        carrito.push(productoSeleccionado);
        actualizarCarrito();
    }

    // Evento click para agregar productos al carrito
    listaProductos.addEventListener('click', function (evento) {
        if (evento.target.tagName === 'LI') {
            agregarAlCarrito(evento);
        }
    });

    // Evento click para comprar
    botonComprar.addEventListener('click', function () {
        const total = parseInt(totalElemento.textContent);
        alert(`Total a pagar: $${total}\nGracias por tu compra!`);
    });

    // Cargar el carrito al cargar la página
    actualizarCarrito();
});

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

