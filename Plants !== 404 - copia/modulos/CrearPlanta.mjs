class Plantas {
    constructor(id, tipo, nombreVulgar, nombreCientifico, tamaño, descripcion, colorFloracion,
        epocaFloracion, follaje, presentacion, stock, precio, precioSinDescuento, imagen) {
        this.id = id
        this.tipo = tipo
        this.nombreVulgar = nombreVulgar
        this.nombreCientifico = nombreCientifico
        this.tamaño = tamaño
        this.descripcion = descripcion
        this.colorFloracion = colorFloracion
        this.epocaFloracion = epocaFloracion
        this.Follaje = follaje
        this.presentacion = presentacion
        this.stock = stock
        this.precio = precio
        this.precioSinDescuento = precioSinDescuento
        this.imagen = imagen
    }

    siguienteImagen(index, producto) {
        index++;
        if (producto.imagen[index]) {
            return index;
        } else {
            return producto.imagen.length - 1;
        }
    }

    anteriorImagen(index, producto) {
        index--;
        if (producto.imagen[index]) {
            return index;
        } else {
            return 0;
        }
    }

    quitarCantidad(producto, cantidad) {
        cantidad--;
        if (producto.stock == 0) {
            return 0;
        } else if (cantidad > 1) {
            return cantidad
        } else {
            return 1;
        }
    }

    agregarCantidad(producto, cantidad) {
        cantidad++;
        if (producto.stock == 0) {
            return 0;
        } else if (producto.stock > cantidad) {
            return cantidad;
        } else {
            return producto.stock;
        }
    }
}


let descripciones = [
    `Sen del Campo es una encantadora enredadera conocida por su elegante follaje y sus llamativas flores amarillas en forma de racimos. Esta planta agrega un toque vibrante y acogedor a cualquier jardín o espacio exterior. Su nombre científico, Senna corymbosa, sugiere la belleza ordenada de sus flores dispuestas en racimos corymbosos.
Esta enredadera de hoja caduca es especialmente destacada durante la primavera, cuando sus flores amarillas despiertan el entorno con su resplandor. Ideal para ser cultivada en macetas, la Sen del Campo es apreciada tanto por jardineros novatos como por expertos debido a su fácil cuidado y su capacidad para adaptarse a diferentes condiciones.
Aprovecha la oportunidad de disfrutar de la naturaleza en su máxima expresión con la enredadera Sen del Campo que, con su encanto natural, seguramente se convertirá en una joya en tu colección de plantas."
Recuerda que esta descripción es completamente ficticia y puedes ajustarla según tus preferencias y necesidades.`,

    `Mariposera es una encantadora enredadera que se destaca por su exquisita belleza y su peculiar nombre científico, Austroeupatorium inulifolium. Esta planta, de hoja caduca, es conocida por sus pequeñas y delicadas flores blancas que florecen en racimos durante la primavera.
La Mariposera agrega un toque de elegancia y serenidad a cualquier entorno, convirtiéndose en una opción ideal para jardines y espacios al aire libre. Su tamaño compacto la hace perfecta para ser cultivada en macetas, lo que facilita su integración en balcones o terrazas.
Durante la primavera, este arbusto caducifolio se transforma en un espectáculo visual, atrayendo mariposas y otros polinizadores con sus flores blancas y fragantes. Además de su atractivo estético, la Mariposera es apreciada por su facilidad de cuidado, convirtiéndola en una elección popular entre amantes de la jardinería de todas las edades.
Descubre la magia de la naturaleza con la encantadora Mariposera, una adición encantadora a cualquier espacio verde`,

    `Aloysia gratissima es un arbusto encantador que se distingue por su fragancia única y hojas de un blanco resplandeciente. También conocido como Cedrón del Campo, este arbusto es originario de regiones tropicales y destaca por su persistente follaje. Durante la primavera, Aloysia gratissima exhibe hermosas flores blancas que atraen a mariposas y otros polinizadores.
Con un tamaño de aproximadamente 0.9 metros, este arbusto es ideal para macetas y áreas de jardín más pequeñas. Su aroma distintivo lo convierte en una opción popular para aquellos que buscan agregar una experiencia sensorial adicional a su entorno. Aloysia gratissima requiere cuidados moderados y prospera en condiciones soleadas.
Presentado en maceta, este arbusto está disponible con un precio atractivo de $1000. ¡Haz que tu jardín brille con la presencia de Aloysia gratissima`,

    `Pyrostegia venusta, también conocida como Flor de San Juan, es un arbusto vibrante que aporta calidez y color a cualquier jardín. Originaria de regiones subtropicales, esta planta destaca por sus llamativas flores naranjas que florecen en primavera. Con un tamaño compacto de aproximadamente 0.5 metros, Pyrostegia venusta es perfecta para macetas y jardines de menor escala.
Su follaje persistente agrega interés visual incluso cuando no está en flor, brindando un atractivo durante todo el año. Este arbusto es fácil de cuidar y prefiere condiciones soleadas para un crecimiento óptimo. Pyrostegia venusta se presenta en maceta y está disponible a un precio de $1700, lo que lo convierte en una opción encantadora y asequible para embellecer tu espacio al aire libre`,

    `Jacaranda mimosifolia, conocida popularmente como Jacaranda, es un majestuoso árbol que transforma paisajes urbanos y rurales con su esplendorosa floración violeta. Originaria de América del Sur, esta especie caducifolia se destaca por sus hojas finamente divididas y sus flores en forma de campana que cubren las ramas en primavera.
Con una altura de aproximadamente 1.5 metros, Jacaranda mimosifolia agrega un toque de elegancia a cualquier jardín. Su atractivo follaje caduco crea un hermoso contraste estacional, y la presentación a raíz desnuda facilita su trasplante y establecimiento. Disponible a un precio de $1200, este árbol es una elección encantadora para aquellos que buscan embellecer su entorno con la magia de la primavera`,

    `Luehea divaricata, comúnmente conocida como Azota Caballo, es un árbol encantador que aporta un toque de romance al entorno natural. Originaria de América del Sur, esta especie caducifolia destaca por sus flores rosadas que aparecen en racimos colgantes durante la primavera. Sus hojas de tono verde oscuro crean un elegante contraste con las vibrantes inflorescencias.
Con una altura de 1.2 metros, Azota Caballo es perfecto para jardines y paisajes más compactos. Su naturaleza caduca proporciona un espectáculo visual estacional, mientras que su presentación en maceta facilita su manejo y trasplante. Disponible a un precio de $2700, este árbol agrega un toque de encanto y color a cualquier espacio verde`,

    `Peltophorum dubium, conocido como Ibirapitá, es un árbol cautivador que aporta una explosión de color y vitalidad a su entorno. Originario de América del Sur, este árbol de hoja perenne es apreciado por sus brillantes flores amarillas que se despliegan durante la temporada de verano. Su elegante follaje y forma distintiva lo convierten en una elección popular para paisajes ornamentales.
Con una altura de 0.7 metros, el Ibirapitá es adecuado para espacios más compactos y jardines bien cuidados. Su presentación en maceta facilita el manejo y el trasplante, permitiendo una integración sin complicaciones en diversos entornos. Este árbol, disponible por $1600, es una opción encantadora para aquellos que buscan agregar un toque vibrante y tropical a su espacio al aire libre`,

    `Casuarina cunninghamiana, conocida comúnmente como Casuarina, es un árbol de aspecto distintivo con agujas finas y plumosas que le confieren una elegancia única. Originaria de Australia, esta especie de árbol persistente ofrece un atractivo follaje verde durante todo el año.
Con una altura de 1.2 metros, la Casuarina es conocida por su resistencia y capacidad para prosperar en diversas condiciones. Su presentación en maceta la hace adecuada para jardines y paisajes controlados, donde su presencia puede añadir una sensación de exotismo y estructura. Disponible por $700, la Casuarina es una elección popular para aquellos que buscan un árbol confiable y de bajo mantenimiento para embellecer su entorno.`,

    `Taxodium distichum, también conocido como Ciprés Calvo, es un conífero de gran porte que se distingue por su majestuosa presencia y su follaje caduco. Originario de América del Norte, este árbol alcanza una altura de 1 metro, destacando por su forma piramidal y sus ramas horizontales.
En primavera, el Ciprés Calvo muestra un verde exuberante que se transforma en tonalidades de bronce en otoño, creando un espectáculo visual impresionante. Este árbol persistente se presenta en maceta y es ideal para aquellos que buscan agregar un toque de grandiosidad a su paisaje. Con un precio de $2000, el Taxodium distichum combina belleza y resistencia, convirtiéndolo en una opción atractiva para los amantes de la naturaleza.`,

    `Lantana megapotamica, comúnmente conocida como Camará Morado, es una planta herbácea que agrega un toque vibrante al entorno con sus llamativas flores de color morado. Originaria de América del Sur, esta especie se destaca por su capacidad para florecer en diversas condiciones, convirtiéndola en una opción versátil para jardines y macetas.
Con un tamaño de 0.4 metros, la Lantana megapotamica presenta un follaje persistente, lo que significa que conserva sus hojas durante todo el año. Su floración ocurre principalmente en primavera, creando un espectáculo visual encantador. Esta planta se ofrece en maceta y está disponible a un precio de $970, brindando una opción atractiva para aquellos que buscan agregar un toque de color y vitalidad a su espacio verde.`,

    `Rhodophiala bifida, conocida como Azucenita Colorada, es una planta herbácea que aporta elegancia y color a cualquier entorno. Esta especie, originaria de América del Sur, se caracteriza por sus hermosas flores de color rojo intenso y forma distintiva.
Con un tamaño de 0.3 metros, la Rhodophiala bifida presenta un ciclo de floración en primavera, brindando un espectáculo visual encantador. Su follaje perenne garantiza que la planta conserve su atractivo durante todo el año. Ofrecida en maceta, esta planta está disponible a un precio de $1300, ofreciendo una opción vibrante para aquellos que buscan realzar la belleza de sus espacios verdes con una planta llamativa y resistente.`
];


export let arrayPlantas = [
    new Plantas(0, "enredadera", "Sen del Campo", "Senna corymbosa", 1, descripciones[0], "amarillo", "primavera", "caducifolio",
        "maceta", 10, 800, 1000, ["Senna_cor_1.jfif", "Senna_cor2.jfif"]),
    new Plantas(1, "enredadera", "Mariposera", "Austroeupatorium inulifolium", 0.7, descripciones[1], "blanco", "primavera", "caducifocio",
        "maceta", 10, 700, 1000, ["Austroeupatorium1.jfif", "Austroeupatorium2.jfif"]),
    new Plantas(2, "arbusto", "Cedron del campo", "Aloysia gratissima", 0.9, descripciones[2], "blanco", "primavera", "persistente",
        "maceta", 10, 1000, 0, ["Aloysia1.jfif", "Aloysia2.jfif"]),
    new Plantas(3, "arbusto", "Flor de San Juan", "Pyrostegia venusta", 0.5, descripciones[3], "naranja", "primavera", "persistente",
        "maceta", 10, 1700, 2200, ["Pyrostegia1.jfif", "Pyrostegia2.jfif"]),
    new Plantas(4, "arbol", "Jacaranda", "Jacaranda mimosifolia", 1.5, descripciones[4], "violeta", "primavera", "caducifolio",
        "a raiz desnuda", 10, 1200, 0, ["Jacaranda1.jfif", "Jacaranda2.jfif"]),
    new Plantas(5, "arbol", "Azota caballo", "Luehea divaricata", 1.2, descripciones[5], "rosado", "primavera", "caducifolio",
        "maceta", 10, 2700, 3000, ["Luehea1.jfif", "Luehea2.jfif"]),
    new Plantas(6, "arbol", "Ibirapita", "Peltophorum dubium", 0.7, descripciones[6], "amarillo", "verano", "persistente",
        "maceta", 10, 1600, 1750, ["Peltophorum1.jfif", "Peltophorum2.jfif"]),
    new Plantas(7, "arbol", "Casuarina", "Casuarina cunninghamiana", 1.2, descripciones[7], "no", "no", "persistente",
        "maceta", 10, 700, 0, ["Casuarina1.jfif", "Casuarina2.jfif"]),
    new Plantas(8, "conifera", "Cipres Calvo", "Taxodium distichum", 1, descripciones[8], "no", "no", "persistente",
        "maceta", 10, 2000, 0, ["Taxodium1.jfif", "Taxodium2.jfif"]),
    new Plantas(9, "herbacea", "Camará morado", "Lantana megapotamica", 0.4, descripciones[9], "violeta", "primavera", "persistente",
        "maceta", 10, 970, 0, ["Lantana1.jpg", "Lantana2.jfif"]),
    new Plantas(10, "herbacea", "Azucenita colorada", "Rhodophiala bifida", 0.3, descripciones[10], "rojo", "primavera", "perenne",
        "maceta", 0, 1300, 2000, ["Rhodololia1.jfif", "Rhodolia2.jfif"]),
]