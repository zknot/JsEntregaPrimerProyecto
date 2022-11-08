let nombreUsuarioPrompt = prompt('Ingrese su nombre')
let edadUsuarioPrompt = prompt('Ingrese su edad')

const saludoUsuario = (nombreUsuario, edadUsuario) => {
    alert('Hola ' + nombreUsuario)
    if (edadUsuario >= 18){
        alert('Bienvenido a La Birrería')
        location.href = ''
    } else{
    alert('Sos menor de edad, no podes comprar')
    location.href = 'http://www.menoresniunagota.cl/'
    }     
}
saludoUsuario(nombreUsuarioPrompt,edadUsuarioPrompt)


let seleccion
let marca
let cantidad
let precio
let subTotal
let total = ('El total de su compra es: $' + subTotal)


const cervezas = [
    {
        marca: 'Schneider',
        precio: 1000,
    },
    {
        marca: 'Brahma',
        precio: 900,
    },
    {
        marca: 'Quilmes',
        precio: 800,
    },
    {
        marca: 'Budweiser',
        precio: 1100,
    }
]


alert('Tenemos las siguientes marcas de cerveza')

for (const cerveza of cervezas){
    alert('Cerveza marca ' + cerveza.marca + ' el precio es: $ ' + cerveza.precio);
}

while (seleccion != 'schneider' && seleccion != 'brahma' && seleccion != 'quilmes' && seleccion != 'budweiser'){
     seleccion = prompt('Seleccione su marca de cerveza: Schneider, Brahma, Quilmes y Budweiser').toLowerCase()
     switch (seleccion) {
        case "schneider":
             alert('Seleccionaste ' + cervezas[0].marca + ' el precio es: $ ' + cervezas[0].precio)
             cantidad = prompt('Cuantos packs querés comprar?')
             subTotal = cervezas[0].precio * cantidad
             alert('El total de su compra es: $' + subTotal)
             alert(nombreUsuarioPrompt + ' Muchas gracias por tu compra!')
             break;
        case "brahma":
             alert('Seleccionaste ' + cervezas[1].marca + ' el precio es: $ ' + cervezas[1].precio)
             cantidad = prompt('Cuantos packs querés comprar?')
             subTotal = cervezas[1].precio * cantidad
             alert('El total de su compra es: $' + subTotal)
             alert(nombreUsuarioPrompt + ' Muchas gracias por tu compra!')
             break;
        case "quilmes":
             alert('Seleccionaste ' + cervezas[2].marca + ' el precio es: $ ' + cervezas[2].precio)
             cantidad = prompt('Cuantos packs querés comprar?')
             subTotal = cervezas[2].precio * cantidad
             alert('El total de su compra es: $' + subTotal)
             alert(nombreUsuarioPrompt + ' Muchas gracias por tu compra!')
        case "budweiser":
             alert('Seleccionaste ' + cervezas[3].marca + ' el precio es: $ ' + cervezas[3].precio)
             cantidad = prompt('Cuantos packs querés comprar?')
             subTotal = cervezas[3].precio * cantidad
             alert('El total de su compra es: $' + subTotal)
             alert(nombreUsuarioPrompt + ' Muchas gracias por tu compra!')
             break;
             default:
                 alert('Gracias por visitarnos')
                 stop
    }    
}
