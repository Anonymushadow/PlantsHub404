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
    const homeOption = document.querySelector(".navbar__menu__option__home");
    const aboutOption = document.querySelector(".navbar__menu__option__about");
    const themeOption = document.querySelector(".switch");
    const contactOption = document.querySelector(".navbar__menu__option__contacto");
    const carritoButton = document.querySelector(".navbar__cart__button");
    const loginButton = document.querySelector(".navbar__login__button");
    const navImage = document.querySelector(".navbar__logo");
    const color = document.querySelector(":root");

    return {
        menuButton,
        searchBarContainer,
        searchBar,
        menu,
        opciones,
        productosOption,
        themeOption,
        aboutOption,
        contactOption,
        carritoButton,
        loginButton,
        navImage,
        homeOption,
        color
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

export const obtenerDatosInicioDOM = () => {
    const homePlantasGrandes = document.querySelector(".");
    const homePlantasChicas = document.querySelector(".");
    const homeOtros = document.querySelector(".");
    const aboutReadMore = document.querySelector(".home__about__read__more");
    const categoryButtons = document.querySelectorAll(".categoria__card__button");

    return {
        homePlantasGrandes,
        homePlantasChicas,
        homeOtros,
        aboutReadMore,
        categoryButtons
    }
};

export const obtenerDatosSobreNosotrosDOM = () => {};

export const obtenerDatosProductsDOM = () => {
    const filterOptions = document.querySelectorAll(".dropdown__filter");
    const orderOptions = document.querySelectorAll(".dropdown__order");

    const filterTodos = document.querySelector(".dropdown__filter__todos");
    const filterStock = document.querySelector(".dropdown__filter__stock");
    const filterDescuento = document.querySelector(".dropdown__filter__descuento");
    const filterEnredaderas = document.querySelector(".dropdown__filter__enredaderas");
    const filterArbustos = document.querySelector(".dropdown__filter__arbustos");
    const filterArboles = document.querySelector(".dropdown__filter__arboles");
    const filterConiferas = document.querySelector(".dropdown__filter__coniferas");
    const filterHerbaceas = document.querySelector(".dropdown__filter__herbaceas");
    const filterMaceta = document.querySelector(".dropdown__filter__macetas");
    const filterRaiz = document.querySelector(".dropdown__filter__raiz");


    const orderFecha = document.querySelector(".dropdown__order__fecha")
    const orderMayorPrecio = document.querySelector(".dropdown__order__mayor__precio")
    const orderMenorPrecio = document.querySelector(".dropdown__order__menor__precio")
    const orderMayorTamaño = document.querySelector(".dropdown__order__mayor__tamaño")
    const orderMenorTamaño = document.querySelector(".dropdown__order__menor__tamaño")

    const verDetalleButton = document.querySelector(".card__button__ver__detalles");
    const añadirCarritoButton = document.querySelector(".card__button__agrergar__carrito");

    return {
        filterOptions,
        filterTodos,
        filterStock,
        filterDescuento,
        filterEnredaderas,
        filterArbustos,
        filterArboles,
        filterConiferas,
        filterHerbaceas,
        filterMaceta,
        filterRaiz,
        orderOptions,
        orderFecha,
        orderMayorPrecio,
        orderMenorPrecio,
        orderMayorTamaño,
        orderMenorTamaño,
        verDetalleButton,
        añadirCarritoButton
    }
};

export const obtenerDatosProductoModal = () => {
    const cerrarModalButton = document.querySelector(".modal__info__product__close__button");
    const siguienteImagen = document.querySelector(".modal__info__product__button__next");
    const anteriorImagen = document.querySelector(".modal__info__product__button__prev");
    const añadirCantidad = document.querySelector(".modal__info__product__details__increment");
    const quitarCantidad = document.querySelector(".modal__info__product__details__decrement");
    const cantidadSeleccionada = document.querySelector(".modal__info__product__details__stock");
    const imgModal = document.querySelector(".modal__info__product__image");
    const modal = document.querySelector(".modal__info__product__container");
    const addToCart = document.querySelector(".modal__info__product__add__to__cart");

    return {
        cerrarModalButton,
        siguienteImagen,
        anteriorImagen,
        añadirCantidad,
        quitarCantidad,
        cantidadSeleccionada,
        imgModal,
        modal,
        addToCart
    }
}

export const obtenerDatosContactoDOM = () => {};