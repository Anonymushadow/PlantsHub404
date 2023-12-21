import { arrayPlantas } from "./crearPlanta.mjs";
import { filterButtons } from "../componentes/productosFilterButtonsComponent.mjs";
import { crearModalProductoComponent } from "../componentes/modalProductoInfoComponent.mjs";
import { productosComponent } from "../componentes/productosComponent.mjs";
import { renderizar } from "./renderizar.mjs";
import { crearVariablesIniciales, contentContainer, obtenerDatosProductsDOM, obtenerDatosProductoModal, carrito } from "./config.mjs";

await crearVariablesIniciales();
let productContainer;
let variablesDOM = false;
let variables;


//añadir botones de filtro
export const cargarFiltros = (datos) => {
    renderizar(contentContainer, filterButtons);
    productContainer = document.querySelector(".productos__container");
    if (datos) {
        cargarProductos(datos);
        activarFiltros(variables, datos, productContainer);
    } else {
        cargarProductos(arrayPlantas);
        activarFiltros(variables, arrayPlantas, productContainer);
    }
}

//añadir productos
const cargarProductos = async(productos) => {
    productContainer.innerHTML = "";

    let cards = productosComponent(productos, productContainer);
    contentContainer.appendChild(cards);

    variables = obtenerDatosProductsDOM();
    variablesDOM = true;


    const verDetallesButtons = document.querySelectorAll(".card__button__ver__detalles");
    const añadirCarritoButton = document.querySelectorAll(".card__button__agrergar__carrito");

    verDetallesButtons.forEach(button => {
        button.addEventListener("click", () => {
            let id = button.id;
            id = id.substring(14)
            abrirModalInfoProducto(id);
        })
    })

    añadirCarritoButton.forEach(button => {
        button.addEventListener("click", () => {
            let id = button.id;
            id = id.substring(13)
            console.log(id)
            abrirModalInfoProducto(id, true);
        })
    })
}

//Modal con la info. del producto
const abrirModalInfoProducto = (id, clickCart) => {
    let indiceIMG = 0;
    let modal = document.querySelector(".modal__info__product__container");
    const producto = arrayPlantas.filter(planta => planta.id == id);
    //le enviamos producto[0] xque filter te devuelve un array asi que le devolvemos el 1er elemento deel array
    let modalData = crearModalProductoComponent(producto[0]);
    modal.classList.add("show__modal");
    modal.innerHTML = "";
    modal.innerHTML = modalData;

    const datosModal = obtenerDatosProductoModal();

    datosModal.quitarCantidad.addEventListener("click", () => {
        let cantidad = producto[0].quitarCantidad(producto[0], parseInt(datosModal.cantidadSeleccionada.textContent));
        datosModal.cantidadSeleccionada.textContent = cantidad;
    });

    datosModal.añadirCantidad.addEventListener("click", () => {
        let cantidad = producto[0].agregarCantidad(producto[0], parseInt(datosModal.cantidadSeleccionada.textContent));
        datosModal.cantidadSeleccionada.textContent = cantidad;
    });

    datosModal.cerrarModalButton.addEventListener("click", () => {
        datosModal.modal.classList.remove("show__modal");
    });

    datosModal.anteriorImagen.addEventListener("click", () => {
        indiceIMG = producto[0].anteriorImagen(indiceIMG, producto[0]);
        datosModal.imgModal.src = "./images/practica/" + producto[0].imagen[indiceIMG];
    });

    datosModal.siguienteImagen.addEventListener("click", () => {
        indiceIMG = producto[0].siguienteImagen(indiceIMG, producto[0]);
        datosModal.imgModal.src = "./images/practica/" + producto[0].imagen[indiceIMG];
    });


    datosModal.addToCart.addEventListener("click", () => {
        if (parseInt(datosModal.cantidadSeleccionada.textContent) > producto[0].stock || parseInt(datosModal.cantidadSeleccionada.textContent) < 1) {
            alert("Inserte una cantidad valida dentro del stock disponible y por encima de cero");
            return;
        } else {
            let encontrado = carrito.find(product => product.producto == producto[0].nombreVulgar);
            if (encontrado) {
                const nuevaCantidad = parseInt(encontrado.cantidad) + parseInt(datosModal.cantidadSeleccionada.textContent);
                if (nuevaCantidad <= producto[0].stock) {
                    const indiceProductoEnCarrito = carrito.findIndex(elemento => elemento.producto === producto[0].nombreVulgar);
                    carrito[indiceProductoEnCarrito].cantidad = nuevaCantidad;
                    alert(`${producto[0].nombreVulgar} x${carrito[indiceProductoEnCarrito].cantidad} añadido al carrito`);
                } else {
                    alert("La cantidad seleccionada supera el stock disponible");
                }
            } else {
                let datosParaCarrito = {
                    producto: producto[0].nombreVulgar,
                    cantidad: datosModal.cantidadSeleccionada.textContent,
                    precioUnitario: producto[0].precio,
                    precioTotal: parseInt(producto[0].precio) * parseInt(datosModal.cantidadSeleccionada.textContent)
                }

                carrito.push(datosParaCarrito);
                alert(`${datosParaCarrito.producto} x${datosParaCarrito.cantidad} añadido al carrito`);
            }
        }
    });

    if (clickCart) {
        datosModal.addToCart.click();
        datosModal.cerrarModalButton.click();
    }
}

//marcar el filtro u orden seleccionado con color
const limpiarSeleccion = (botones, selecction, type) => {
    botones.forEach(boton => {
        type == "filter" ? boton.classList.remove("dropdown__filter__selected") : boton.classList.remove("dropdown__order__selected");
    });

    type == "filter" ? selecction.classList.add("dropdown__filter__selected") : selecction.classList.add("dropdown__order__selected");;
}

//activar la funcionalidad de los botones de filtrro y orden
const activarFiltros = async(variables, productos, contenedor) => {
    let productosActuales = productos;

    variables.filterOptions.forEach(filterB => {
        filterB.removeEventListener("click", null);
    })

    //FILTRO TODOS
    variables.filterTodos.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterTodos, "filter");
        cargarProductos(arrayPlantas);
        productosActuales = arrayPlantas;
    });

    //FILTRO CON STOCK
    variables.filterStock.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterStock, "filter");
        let productosConStock = productos.filter(producto => producto.stock > 0);
        cargarProductos(productosConStock);
        productosActuales = productosConStock;
    });

    //FILTRO CON DESCUENTO
    variables.filterDescuento.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterDescuento, "filter");
        let productosConDescuento = productos.filter(producto => producto.precioSinDescuento > 0);
        cargarProductos(productosConDescuento);
        productosActuales = productosConDescuento;
    });

    //FILTRO ENREDADERAS
    variables.filterEnredaderas.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterEnredaderas, "filter");
        let productosEnredadera = productos.filter(producto => producto.tipo == "enredadera");
        cargarProductos(productosEnredadera);
        productosActuales = productosEnredadera;
    });

    //FILTRO ARBUSTOS
    variables.filterArbustos.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterArbustos, "filter");
        let productosArbusto = productos.filter(producto => producto.tipo == "arbusto");
        cargarProductos(productosArbusto);
        productosActuales = productosArbusto;
    });

    //FILTRO ARBOLES
    variables.filterArboles.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterArboles, "filter");
        let productosArbol = productos.filter(producto => producto.tipo == "arbol");
        cargarProductos(productosArbol);
        productosActuales = productosArbol;
    });

    //FILTRO CONIFERAS
    variables.filterConiferas.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterConiferas, "filter");
        let productosConifera = productos.filter(producto => producto.tipo == "conifera");
        cargarProductos(productosConifera);
        productosActuales = productosConifera;
    });

    //FILTRO HERBACEAS
    variables.filterHerbaceas.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterHerbaceas, "filter");
        let productosHerbacea = productos.filter(producto => producto.tipo == "herbacea");
        cargarProductos(productosHerbacea);
        productosActuales = productosHerbacea;
    });

    //FILTRO EN MACETA
    variables.filterMaceta.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterMaceta, "filter");
        let productosMaceta = productos.filter(producto => producto.presentacion == "maceta");
        cargarProductos(productosMaceta);
        productosActuales = productosMaceta;
    });

    //FILTRO EN RAIZ
    variables.filterRaiz.addEventListener("click", () => {
        limpiarSeleccion(variables.filterOptions, variables.filterRaiz, "filter");
        let productosRaiz = productos.filter(producto => producto.presentacion == "a raiz desnuda");
        cargarProductos(productosRaiz);
        productosActuales = productosRaiz;
    });

    //-----------------ORDER-------------------------------------------

    //ORDEN FECHA (POR DEFECTO)
    variables.orderFecha.addEventListener("click", () => {
        limpiarSeleccion(variables.orderOptions, variables.orderFecha, "order");
        cargarProductos(productos);
    });

    //ORDEN PRECIO (MAYOR A MENOR)
    variables.orderMayorPrecio.addEventListener("click", () => {
        limpiarSeleccion(variables.orderOptions, variables.orderMayorPrecio, "order");
        let arrayOrdenado = productosActuales.sort((a, b) => b.precio - a.precio);
        cargarProductos(arrayOrdenado);
    });

    //ORDEN PRECIO (MENOR A MAYOR)
    variables.orderMenorPrecio.addEventListener("click", () => {
        limpiarSeleccion(variables.orderOptions, variables.orderMenorPrecio, "order");
        let arrayOrdenado = productosActuales.sort((a, b) => a.precio - b.precio);
        cargarProductos(arrayOrdenado);
    });

    //ORDEN TAMAÑO (MAYOR A MENOR)
    variables.orderMayorTamaño.addEventListener("click", () => {
        limpiarSeleccion(variables.orderOptions, variables.orderMayorTamaño, "order");
        let arrayOrdenado = productosActuales.sort((a, b) => b.tamaño - a.tamaño);
        cargarProductos(arrayOrdenado);
    });

    //ORDEN TAMAÑO (MENOR A MAYOR)
    variables.orderMenorTamaño.addEventListener("click", () => {
        limpiarSeleccion(variables.orderOptions, variables.orderMenorTamaño, "order");
        let arrayOrdenado = productosActuales.sort((a, b) => a.precio - b.precio);
        cargarProductos(arrayOrdenado);
    });
}