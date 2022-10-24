// AFTER REPASO

//let seleccionUsuario = prompt('Seleccione un monitor de los siguientes: Samsung, LG, Aorus').toLocaleLowerCase()

/*let seleccionUsuario

while (seleccionUsuario != 'samsung' && seleccionUsuario != 'samsung tv' && seleccionUsuario != 'lg' && seleccionUsuario != 'aorus') {
    seleccionUsuario = prompt('Valor incorrecto. Seleccione entre: Samsung, LG, Aorus').toLocaleLowerCase()
    switch (seleccionUsuario) {
        case 'samsung':
        case 'samsung tv':
            console.log('Usted compro un monitor Samsung');
            break;
        case 'lg':
            console.log('Usted compro un monitor LG');
            break;
        case 'aorus':
            console.log('Usted compro un monitor Aorus');
            break;
        default:
            console.log('Usted ingreso un valor incorrecto');
            break;
    }
}
*/

//REPASO DE FUNCIONES

/*console.log('Curso')
console.log('Javascript')
console.log('Coderhouse')
console.log('Curso')
console.log('Javascript')
console.log('Coderhouse')
console.log('Curso')
console.log('Javascript')
console.log('Coderhouse')
console.log('Curso')
console.log('Javascript')
console.log('Coderhouse')
console.log('Curso')
console.log('Javascript')
console.log('Coderhouse')
console.log('Curso')
console.log('Javascript')
console.log('Coderhouse')
*/
//Funciones Viejas
//function funcionFunction(){

//}
//Funciones Actuales
//const muestroDatosDelCurso = () => {
//    console.log('Curso')
//    console.log('Javascript')
//    console.log('Coderhouse')
//}

//muestroDatosDelCurso()

//Funciones con Parametros

//const saludarUsuario = (nombreUsuario, edadUsuario) => {
//    console.log('Hola ' + nombreUsuario + ', usted tiene ' + edadUsuario + ' años')
//}

//let nombreUsuarioPrompt = (prompt('Ingrese su nombre'))
//let edadUsuarioPrompt = (prompt('Ingrese su edad'))

//saludarUsuario(nombreUsuarioPrompt, edadUsuarioPrompt)

//Funciones con Retorno

/*const sumar = (numeroA, numeroB) => {
    let resultado = numeroA + numeroB
    return resultado
}

let numeroAUsuario = Number(prompt('Ingrese el primer numero'))
let numeroBUsuario = Number(prompt('Ingrese el segundo numero'))

let resultadoSuma = sumar(numeroAUsuario, numeroBUsuario)
console.log(resultadoSuma)
*/
//alert('Hola ' + nombreUsuario +' '+ edadUsuario)


const saludoUsuario = (nombreUsuario, edadUsuario) => {
    alert('Hola ' + nombreUsuario)
    if (edadUsuario >= 18){
    alert('Bienvenido a La Birrería')
    } else{
    alert('Sos menor de edad, no podes comprar')
    location.href = 'http://www.menoresniunagota.cl/'
    }     
}

let nombreUsuarioPrompt = prompt('Ingrese su nombre')
let edadUsuarioPrompt = prompt('Ingrese su edad')

saludoUsuario(nombreUsuarioPrompt,edadUsuarioPrompt)

let seleccion
let marca
let cantidad
let precio
let total = ('El total de su compra es: $' + precio)


while (seleccion != 'schneider $900' && seleccion != 'brahma $700' && seleccion != 'quilmes $600'){
    seleccion = prompt('Seleccione su marca de cerveza').toLowerCase()
    switch (seleccion) {
        case "schneider":
            alert('Seleccionaste Schneider');
            cantidad = prompt('Cuantos packs querés comprar?')
            precio = (900 * cantidad)
            break;
        case "brahma":
            alert('Seleccionaste Brahma');
            cantidad = prompt('Cuantos packs querés comprar?')
            precio = (700 * cantidad)
            break;
        case "quilmes":
            alert('Seleccionaste Quilmes');
            cantidad = prompt('Cuantos packs querés comprar?')
            precio = (600 * cantidad)
            break;
        default:
            alert('Ingresaste una opción invalida');
            break;
    } 
    alert('El total es: $' + precio)
}


/*
while (seleccion != 'schneider' && seleccion != 'brahma' && seleccion != 'quilmes'){
    seleccion = prompt('Esa marca no la trabajamos, Seleccione otra').toLowerCase
    switch (seleccion) {
        case "schneider":
            alert('Seleccionaste Schneider');
            break;
        case "brahma":
            alert('Seleccionaste Brahma');
            break;
        case "quilmes":
            alert('Seleccionaste Quilmes');
            break;
        default:
            alert('Ingresaste una opción invalida');
            break;
    }
}
*/