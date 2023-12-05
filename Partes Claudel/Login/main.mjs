import { login } from "./modulos/login.mjs";

const startApplication = ()=> {
    login("login");
}

window.addEventListener("load", ()=> {
    startApplication();
})