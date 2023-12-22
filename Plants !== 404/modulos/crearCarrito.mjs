export const crearCarrito = (datos) => {

    //CONTENEDOR GENERAL
    let contenedorProductos = document.createElement("div");
    contenedorProductos.classList.add("products__container");

    //HEADER
    let headerProductos = document.createElement("div");
    headerProductos.classList.add("product__header");

    let tituloProductos = document.createElement("h5");
    tituloProductos.textContent = "PRODUCTO";

    let precioProductos = document.createElement("h5");
    precioProductos.textContent = "PRECIO";

    let cantidadProductos = document.createElement("h5");
    cantidadProductos.textContent = "CANTIDAD";

    let totalProductos = document.createElement("h5");
    totalProductos.textContent = "TOTAL";

    //AÑADIR LO YA CREADO AL HEADER
    headerProductos.append(tituloProductos, precioProductos, cantidadProductos, totalProductos);

    //CONTENEDOR DE CADA PRODUCTO
    const plantasContenedor = document.createElement("div");
    plantasContenedor.classList.add("plantas");

    //BOTON DE REALIZAR COMPRA
    const buttonRealizarPedido = document.createElement("button");
    buttonRealizarPedido.classList.add("boton__comprar");
    buttonRealizarPedido.textContent = "Realizar Pedido";



    //CADA PRODUCTO EN SI
    datos.forEach(producto => {
        let contenedorPlanta = document.createElement("div");
        contenedorPlanta.classList.add("planta");

        let botonCierre = document.createElement("i");
        botonCierre.classList.add("fas");
        botonCierre.classList.add("fa-solid");
        botonCierre.classList.add("fa-trash");
        botonCierre.classList.add("button__close");

        botonCierre.id = producto.id;

        let imgProduct = document.createElement("img");
        imgProduct.classList.add("image__product");
        imgProduct.src = `./images/practica/${producto.imagen}`;
        imgProduct.setAttribute("onerror", `this.src="./images/practica/descarga.jpg"`);

        let span = document.createElement("span")

        let productoNombre = document.createElement("i");
        productoNombre.textContent = producto.producto;

        let precioUnitario = document.createElement("div");
        precioUnitario.classList.add("price");
        precioUnitario.textContent = producto.precioUnitario;

        let cantidadProducto = document.createElement("div");
        cantidadProducto.classList.add("quantity");
        cantidadProducto.textContent = producto.cantidad;

        let totalProducto = document.createElement("div");
        totalProducto.classList.add("total");
        totalProducto.textContent = producto.precioTotal;

        span.appendChild(productoNombre);
        contenedorPlanta.append(botonCierre, imgProduct, span, precioUnitario, cantidadProducto, totalProducto);
        plantasContenedor.append(contenedorPlanta);
    })


    let totalContenedor = document.createElement("div");
    totalContenedor.classList.add("basketTotalContainer");

    let totalTitulo = document.createElement("h4");
    totalTitulo.classList.add("basketTotal");
    totalTitulo.textContent = datos.reduce((total, price) => price.precioTotal);

    contenedorProductos.append(headerProductos, plantasContenedor, buttonRealizarPedido);
    return contenedorProductos;
}