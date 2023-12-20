import { obtenerDatosLoginDOM, obtenerDatosRegisterDOM, contentContainer } from "./config.mjs";
import { MESSAGE_TYPES } from "./MESSAGE_TYPES.mjs";
import { verificarTiposDeDatos } from "./VerificarDatos.mjs";
import { leerArchivo } from "./ObtenerUsuarios.mjs";
import { renderizar } from "./renderizar.mjs";
import { registroComponent } from "../componentes/registro.mjs";
import { loginComponent } from "../componentes/ingreso.mjs";


export let userAllowed;

const verificarCamposLogin = (mail, pass) => {
    if (!mail || mail == "" || !verificarTiposDeDatos(mail, MESSAGE_TYPES.IS_MAIL)) {
        return {
            status: false,
            message: "Correo invalido"
        };
    } else if (!pass || pass == "") {
        return {
            status: false,
            message: "Contraseña invalida"
        }
    }

    return {
        status: true
    }
}

const verificarCamposRegistro = (datos) => {}


//FUNCION PARA LOGIN
const loginVerification = async(datos) => {
    const mail = datos.loginEmailInput.value.toLowerCase();
    const password = datos.loginPasswordInput.value.toLowerCase();

    if (verificarCamposLogin(mail, password).status) {
        let usuarios = await leerArchivo("./data/usuarios.txt", "usuarios");

        console.log(usuarios)

        const usuario = usuarios.find((user) => user.mail === mail);

        if (usuario && usuario.clave == `${password}`) {
            userAllowed = usuario.usuario;
            alert(`Bienvendio ${userAllowed}`);
            renderizar(contentContainer, "<h2>Productos</h2>");
        } else {
            let errMessage = usuario ? "Contraseña incorrecta" : "Usuario no encontrado";
            alert(errMessage);
        }

    } else {
        alert(verificarCamposLogin(mail, password).message);
    }

}


//FUNCION PARA REGISTRO
const registerVerification = (datos) => {}


//FUNCION PARA CERRAR SESION
export const cerrarSesion = () => {
    userAllowed = "";
}





export const login = (tipoFormulario) => {
    const datos = tipoFormulario === "login" ? obtenerDatosLoginDOM() : obtenerDatosRegisterDOM();


    datos.formulario.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    datos.loginSendButton.addEventListener("click", () => {
        tipoFormulario == "login" ? loginVerification(datos) : registerVerification(datos);
    })

    if (tipoFormulario == "login") {
        datos.registerlink.addEventListener("click", () => {
            renderizar(contentContainer, registroComponent);
            login("register");
        })
    } else {
        datos.loginlink.addEventListener("click", () => {
            renderizar(contentContainer, loginComponent);
            login("login");
        })
    }

}