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
    // Función para limpiar el carrito y reiniciar la pantalla
    function limpiarPantalla() {
        carrito = [];
        actualizarCarrito();
        alert('Gracias por tu compra!');
    }

    // Evento click para comprar
    botonComprar.addEventListener('click', function () {
        const total = parseInt(totalElemento.textContent);
        alert(`Total a pagar: $${total}`);
        limpiarPantalla();
    });
    // Cargar el carrito al cargar la página
    actualizarCarrito();
});