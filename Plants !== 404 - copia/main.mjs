import { crearVariablesIniciales } from "./modulos/config.mjs";
import { Menu } from "./modulos/menu.mjs";
import { contentContainer } from "./modulos/config.mjs";
import { homeComponent } from "./componentes/Home.mjs";
import { renderizar } from "./modulos/renderizar.mjs";


const startApplication = () => {
    crearVariablesIniciales();
    //Header();
    Menu();
    renderizar(contentContainer, homeComponent);
    //Footer();
}

window.addEventListener("load", () => {
    startApplication();
});