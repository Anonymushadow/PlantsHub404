import {
  obtenerElementosParaLogin,
  obtenerElementosParaRegistro,
} from "./config.mjs";
import { MESSAGE_TYPES } from "./MESSAGE_TYPES.mjs";
import { verificarTiposDeDatos } from "./VerificarDatos.mjs";

let datos;

export const login = (tipo) => {
  datos = tipo === "login" ? obtenerElementosParaLogin() : obtenerElementosParaRegistro();

  if (tipo === "login") {
    datos.formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!verificarTiposDeDatos(datos.loginEmailInput.value, MESSAGE_TYPES.IS_MAIL)) {
        alert("Correo invalido");
        //Alertar("Revise su contraseña", "error");
        return;
      }

      if(!datos.loginPasswordInput.value){
        alert("Contraseña invalida");
        return;
      }
    });
  }else{
    datos.formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!verificarTiposDeDatos(datos.loginEmailInput.value, MESSAGE_TYPES.IS_MAIL)) {
          alert("Revise su contraseña");
          //Alertar("Revise su contraseña", "error");
          return;
        }

        if (!verificarTiposDeDatos(datos.loginDNIInput.value, MESSAGE_TYPES.IS_NUMBER) || datos.loginDNIInput == "") {
            alert("Revise su DNI");
            //Alertar("Revise su contraseña", "error");
            return;
          }
  
        if(!datos.loginPasswordInput.value){
          alert("Ingrese una contraseña");
          return;
        }
      });
  }
};
