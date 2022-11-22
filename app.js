// Array Cervezas
const totalCerveza = [schneider, brahma, quilmes, budweiser]

// Funciones

const  menuCervezas = document.querySelector('#menuCervezas')

const mostrarCerveza = (e) => {
    console.log(e.target);
}

function cargarProductos () {
    totalCerveza.forEach(Cerveza => {

        const listaProductos = document.createElement("div");
        listaProductos.classList.add('Producto01')
        listaProductos.setAttribute('button', Cerveza.marca)
        listaProductos.innerHTML = `
        <img src="${Cerveza.img}" alt="Producto1">
        <h3 class="productoTitulo">${Cerveza.marca}</h3>^
        <p class="cantidadLatas">${Cerveza.cantidad}</p>
        <p class="productoPrecio">${Cerveza.precio}</p>
        <button class= "button" > Comprar </button>
        `
      menuCervezas.append(listaProductos)  
    })
    const seleccionProducto = document.querySelectorAll('.Producto01')
        seleccionProducto.forEach((button) => {
            button.addEventListener('click', mostrarCerveza)
        })
}


cargarProductos()


