import {
    obtenerElementosParaLogin,
    obtenerElementosParaRegistro,
} from "./config.mjs";
import { MESSAGE_TYPES } from "./MESSAGE_TYPES.mjs";
import { verificarTiposDeDatos } from "./VerificarDatos.mjs";
import { leerArchivo } from "./ObtenerUsuarios.mjs";

let datosDOM;

export const login = (tipo) => {
    datosDOM =
        tipo === "login" ?
        obtenerElementosParaLogin() :
        obtenerElementosParaRegistro();

    datosDOM.formulario.addEventListener("submit", async(e) => {
        e.preventDefault();

        if (!verificarTiposDeDatos(
                datosDOM.loginEmailInput.value,
                MESSAGE_TYPES.IS_MAIL
            )) {
            alert("Correo inválido");
            return;
        }

        if (!datosDOM.loginPasswordInput.value) {
            alert("Contraseña inválida");
            return;
        }

        if (tipo === "login") {
            try {
                const data = await leerArchivo("./data/usuarios.txt", "usuarios");

                const usuarioEncontrado = data.find(
                    (usuario) => usuario.mail.trim().toLowerCase() === datosDOM.loginEmailInput.value.trim().toLowerCase()
                );



                if (usuarioEncontrado) {
                    const claveCorrecta = usuarioEncontrado.clave.trim() === datosDOM.loginPasswordInput.value.trim();

                    if (claveCorrecta) {
                        alert("Logeado");
                    } else {
                        alert("Clave incorrecta");
                    }
                } else {
                    alert("Usuario no encontrado");
                }

            } catch (error) {
                console.error("Hubo un error al obtener los datos:", error.message);
            }
        } else {
            if (!verificarTiposDeDatos(
                    datosDOM.loginDNIInput.value,
                    MESSAGE_TYPES.IS_NUMBER
                ) ||
                datosDOM.loginDNIInput === ""
            ) {
                alert("Revise su DNI");
                return;
            }

            if (!datosDOM.loginPasswordInput.value) {
                alert("Ingrese una contraseña");
                return;
            }
        }
    });
};