//Aca tendremos todo lo que son datos, nada de logica (de ser posible)

export let carrito = [];
export let productos = [];
export let contentContainer;

export const crearVariablesIniciales = () => {
    contentContainer = document.querySelector(".content__container");
};

export const obtenerDatosNavbarDOM = () => {
    const menuButton = document.querySelector(".navbar__menu__button");
    const searchBarContainer = document.querySelector(".navbar__search__bar__container");
    const searchBar = document.querySelector(".navbar__search__bar");
    const menu = document.querySelector(".navbar__menu");
    const opciones = document.querySelectorAll(".navbar__menu__option");
    const productosOption = document.querySelector(".navbar__menu__option__productos");
    const configurationOption = document.querySelector(".navbar__menu__option__configuracion");
    const aboutOption = document.querySelector(".navbar__menu__option__about");
    const contactOption = document.querySelector(".navbar__menu__option__contacto");
    const carritoButton = document.querySelector(".navbar__cart__button");
    const loginButton = document.querySelector(".navbar__login__button");

    return {
        menuButton,
        searchBarContainer,
        searchBar,
        menu,
        opciones,
        productosOption,
        configurationOption,
        aboutOption,
        contactOption,
        carritoButton,
        loginButton
    }
};

export const obtenerDatosLoginDOM = () => {
    const formulario = document.querySelector(".login__form");
    const loginEmailInput = document.querySelector(".login__form__input__email");
    const loginPasswordInput = document.querySelector(
        ".login__form__input__password"
    );
    const loginSendButton = document.querySelector(".login__form__send__button");
    const registerlink = document.querySelector(".login__register__link");


    return {
        formulario,
        loginEmailInput,
        loginPasswordInput,
        loginSendButton,
        registerlink
    };
};

export const obtenerDatosRegisterDOM = () => {
    const formulario = document.querySelector(".login__form");
    const registerEmailInput = document.querySelector(".login__form__input__email");
    const registerPasswordInput = document.querySelector(
        ".login__form__input__password"
    );
    const registerDNIInput = document.querySelector(".login__form__input__dni");
    const loginSendButton = document.querySelector(".login__form__send__button");
    const loginlink = document.querySelector(".login__register__link");

    return {
        formulario,
        registerEmailInput,
        registerPasswordInput,
        registerDNIInput,
        loginSendButton,
        loginlink
    };
};

export const obtenerDatosFooterDOM = () => {};

export const obtenerDatosInicioDOM = () => {};

export const obtenerDatosSobreNosotrosDOM = () => {};

export const obtenerDatosProductsDOM = () => {};

export const obtenerDatosContactoDOM = () => {};