import { obtenerDatosNavbarDOM, contentContainer } from "./config.mjs";
import { renderizar } from "./renderizar.mjs";
import { loginComponent } from "../componentes/ingreso.mjs";
import { login, userAllowed, cerrarSesion } from "./login.mjs";
import { aboutComponent } from "../componentes/about.mjs";
import { homeComponent } from "../componentes/Home.mjs";
import { cargarFiltros } from "./productos.mjs";
import { arrayPlantas } from "./crearPlanta.mjs";
import { Buscar } from "./search.mjs";
import { startTheme } from "./theme.mjs";
import { iniciarAsistente } from "./asistente.mjs";

const eliminarSeleccion = (links) => {
    links.forEach(link => link.classList.remove("navbar__menu__option__active"));
}

export const Menu = () => {
    const datos = obtenerDatosNavbarDOM();


    const categoryButtons = document.querySelectorAll(".categoria__card__button");
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            datos.productosOption.click();
        });
    });

    const readModeHome = document.querySelector(".home__about__read__more");
    readModeHome.addEventListener("click", () => {
        datos.aboutOption.click();
    });

    //IMG CLICK
    datos.navImage.addEventListener("click", () => {
        eliminarSeleccion(datos.opciones);
        datos.homeOption.classList.add("navbar__menu__option__active");
        datos.searchBarContainer.classList.remove("show__search__bar");
        renderizar(contentContainer, homeComponent);
        const categoryButtons = document.querySelectorAll(".categoria__card__button");
        categoryButtons.forEach(button => {
            button.addEventListener("click", () => {
                datos.productosOption.click();
            });
        });
        const readModeHome = document.querySelector(".home__about__read__more");
        readModeHome.addEventListener("click", () => {
            datos.aboutOption.click();
        });
        iniciarAsistente(datos);
    })

    //MENU BUTTON
    datos.menuButton.addEventListener("click", () => {
        datos.menu.classList.toggle("show__menu");
    });

    //HOME BUTTON
    datos.homeOption.addEventListener("click", () => {
        eliminarSeleccion(datos.opciones);
        datos.homeOption.classList.add("navbar__menu__option__active");
        datos.searchBarContainer.classList.remove("show__search__bar");
        renderizar(contentContainer, homeComponent);
        const categoryButtons = document.querySelectorAll(".categoria__card__button");
        categoryButtons.forEach(button => {
            button.addEventListener("click", () => {
                datos.productosOption.click();
            });
        });
        const readModeHome = document.querySelector(".home__about__read__more");
        readModeHome.addEventListener("click", () => {
            datos.aboutOption.click();
        });
    })

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
        cargarFiltros();
        let searchBar = document.querySelector(".navbar__search__bar");
        searchBar.addEventListener("input", () => {
            let response = Buscar(searchBar, arrayPlantas);
            cargarFiltros(response);
        });
    })

    //CONTACTENOS BUTTON

    //THEME BUTTON
    startTheme();

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