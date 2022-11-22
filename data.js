class Cerveza {
    constructor(id, marca, tipo, precio, cantidad, descripcion, img){
        this.id = id
        this.marca = marca
        this.tipo = tipo
        this.precio = precio
        this.cantidad = cantidad
        this.descripcion = descripcion
        this.img = img
        }
}

const schneider = new Cerveza('01', 'Schneider', 'Rubia', '1000', 'Pack x 6 latas de 473cc', 'Suaves aromas frutados, donde se puede percibir una leve nota sulfurosa (fresca). Suave sabor a malta. Color dorado claro y espuma blanca. Leve dulzor y amargo suave a moderado. Suave, no áspera ni astringente. Moderado balance.', './img/pack01.jpg')
const brahma = new Cerveza('02', 'Brahma', 'Rubia', '900', 'Pack x 6 latas de 473cc', 'Brahma es una cerveza brasilera, esta Pils rubia te seducirá por su sabor ligero y refrescante, ¡además de su pizca de papaya en nota final! Quiere transmitir la actitud y el estilo de vida de los brasileños a los consumidores del mundo entero.', './img/pack02.jpg')
const quilmes = new Cerveza('03', 'Quilmes', 'Rubia', '800', 'Pack x 6 latas de 473cc', 'Cerveza lager argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor del lúpulo y el sabor del cereal. Color amarillo dorado brillante. Es una cerveza equilibrada, de gran refrescancia y cuerpo balanceado, que marida con platos más bien grasosos o pesados.', './img/pack03.jpg')
const  budweiser = new Cerveza('04', 'Budweiser', 'Rubia', '1100', 'Pack x 6 latas de 473cc', 'Cerveza de color dorado pálido, clara y brillante y con una espuma blanca cremosa y consistente. Se perciben ligeras notas afrutadas a plátano y frutas maduras, con aromas menos intensos a grano tostado y caramelo y un suave toque de fondo herbal.', './img/pack04.png')

