import { productosComponent } from "../componentes/productosComponent.mjs";
import { contentContainer } from "./config.mjs";
import { crearCarrito } from "./crearCarrito.mjs";
import { userAllowed } from "./login.mjs";
import { renderizar } from "./renderizar.mjs";

let carritoButtonCantidad = document.querySelector(".cantidad__productos");

//mostrar cantidad de producto en el icono deel carrito
export const startCartButtonCounter = () => {
    let prodCant = localStorage.getItem("cantidadCarrito");
    prodCant ? carritoButtonCantidad.textContent = prodCant : carritoButtonCantidad.textContent = 0;
}

//añair cantidad elementos del carrito al locastorage
export function añadirAlCarritoVisual(cantidadAñadida, producto) {
    let productsCantidad = localStorage.getItem("cantidadCarrito");

    //por las dudas convertimos a numeros los valores
    cantidadAñadida = parseInt(cantidadAñadida);
    productsCantidad = parseInt(productsCantidad) || 0; //por si hay algun error

    if (productsCantidad) {
        //solo sumo la cantidad de productos a la que ya habia
        localStorage.setItem("cantidadCarrito", productsCantidad + cantidadAñadida);
        carritoButtonCantidad.textContent = productsCantidad + cantidadAñadida;
    } else {
        //si no habia directamente escribo la cantidad nueva
        localStorage.setItem("cantidadCarrito", cantidadAñadida);
        carritoButtonCantidad.textContent = cantidadAñadida;
    }

    //ahora inciio la funcion que va a añadir el producto en si
    setItems(producto);
}



//Para poner el producto en el local storage
function setItems(planta) {
    console.log(planta)
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems) || [];

    //verifico si existe el producto en el localStorage o no
    const existingPlantIndex = cartItems.findIndex(item => item.producto === planta.producto);

    if (existingPlantIndex !== -1) {
        //si exite solo sobreescribo la cantidad y el precio total
        cartItems[existingPlantIndex].cantidad = planta.cantidad;
        cartItems[existingPlantIndex].precioTotal = planta.precioTotal;
    } else {
        //si no existe solo lo añado completo
        cartItems.push({
            ...planta
        });
    }

    //añadimos los datos al storage (lo anterior fue la creacion y modificaicon de los datos)
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

export const mostrarCarrito = () => {
    let cartItems = localStorage.getItem("productsInCart");
    if (cartItems && JSON.parse(cartItems).length > 0) {
        cartItems = JSON.parse(cartItems);
        console.log(cartItems);

        let contenidoCarrito = crearCarrito(cartItems);

        contentContainer.innerHTML = "";
        contentContainer.appendChild(contenidoCarrito);

        const closeButtons = document.querySelectorAll(".button__close");
        closeButtons.forEach(button => {
            button.addEventListener("click", () => {
                let id = button.id;
                let indice = cartItems.findIndex(productoCarrito => productoCarrito.id == id);
                if (indice !== -1) {
                    cartItems.splice(indice, 1);

                    actualizarCarritoYSyncStorage(cartItems);

                    mostrarCarrito();
                }

            })
        });
    } else {
        document.querySelector(".navbar__menu__option__productos").click();
    }


    let buttonPedido = document.querySelector(".boton__comprar");
    buttonPedido.addEventListener("click", () => {
        if (userAllowed) {
            let mensaje = generarMensaje(cartItems, userAllowed);
            const link = `https://wa.me/5491168129047?text=${encodeURIComponent(mensaje)}`;
            window.open(link, "_blank");
        } else {
            alert("Para realizar un pedido debe registrarse");
        }
    });
}

function actualizarCarritoYSyncStorage(cartItems) {
    if (cartItems) {
        // Actualizar la cantidad en el botón del carrito
        carritoButtonCantidad.textContent = cartItems.length;

        // Actualizar el localStorage
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        localStorage.setItem("cantidadCarrito", cartItems.length.toString());
    }
}


const generarMensaje = (productos, user) => {
    let mensaje = "";
    mensaje += `PEDIDO DE ${user}\n`;
    mensaje += "------------------------------------\n";
    let cantidadTotal = 0;

    productos.forEach((producto) => {
        mensaje += "------------------------------------\n";
        mensaje += `Producto: ${producto.producto}\n`;
        mensaje += `Cantidad: ${producto.cantidad}\n`;
        mensaje += `Precio Unitario: ${producto.precioUnitario}\n`;
        mensaje += `Precio Total: ${producto.precioTotal}\n`;

        cantidadTotal += parseInt(producto.precioTotal) + parseInt(cantidadTotal);
    });

    mensaje += "------------------------------------\n";
    mensaje += `Total: $${cantidadTotal}`;

    return mensaje;
}