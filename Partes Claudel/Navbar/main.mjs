import { Buscar } from "./modulos/search.mjs";
import { Menu } from "./modulos/menu.mjs";
import { productosOption, searchBarContainer } from "./modulos/config.mjs";


const startApplication = ()=> {
    Menu();

    productosOption.addEventListener("click", ()=> {
        searchBarContainer.classList.add("show__search__bar");
     })
}

window.addEventListener("load", ()=> {
    startApplication();
})