import { crearVariablesIniciales } from "./modulos/config.mjs";
import { Menu } from "./modulos/menu.mjs";


const startApplication = () => {
    crearVariablesIniciales();
    //Header();
    Menu();
    //Home();
    //Footer();
}

window.addEventListener("load", () => {
    startApplication();
});