import { obtenerDatosNavbarDOM, contentContainer } from "./config.mjs";
import { renderizar } from "./renderizar.mjs";
import { loginComponent } from "../componentes/ingreso.mjs";
import { login, userAllowed, cerrarSesion } from "./login.mjs";
import { aboutComponent } from "../componentes/about.mjs";

const eliminarSeleccion = (links) => {
    links.forEach(link => link.classList.remove("navbar__menu__option__active"));
}

export const Menu = () => {
    const datos = obtenerDatosNavbarDOM();

    //MENU BUTTON
    datos.menuButton.addEventListener("click", () => {
        datos.menu.classList.toggle("show__menu");
    });

    //HOME BUTTON

    //SOBRE NOSOTROS BUTTON
    datos.aboutOption.addEventListener("click", () => {
        eliminarSeleccion(datos.opciones);
        datos.aboutOption.classList.add("navbar__menu__option__active");
        datos.searchBarContainer.classList.remove("show__search__bar");
        renderizar(contentContainer, aboutComponent);
    })

    //PRODUCTS BUTTON
    datos.productosOption.addEventListener("click", () => {
        eliminarSeleccion(datos.opciones);
        datos.productosOption.classList.add("navbar__menu__option__active");
        datos.searchBarContainer.classList.add("show__search__bar");
        renderizar(contentContainer, `<h1>Products</h1>`);
    })

    //CONTACTENOS BUTTON

    //CONFIGURACION BUTTON

    //CARRITO BUTTON

    //LOGIN BUTTON
    datos.loginButton.addEventListener("click", () => {
        if (userAllowed && userAllowed !== "") {
            cerrarSesion();
            alert("Sesion cerrada");
        } else {
            eliminarSeleccion(datos.opciones);
            datos.searchBarContainer.classList.remove("show__search__bar");
            renderizar(contentContainer, loginComponent);
            login("login");
        }
    })


    //loginButton
}