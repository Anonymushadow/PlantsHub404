import { MESSAGE_TYPES } from "./MESSAGE_TYPES.mjs";
import { Expresions } from "./Expresions.mjs";



export const verificarTiposDeDatos = (dato, tipo)=> {
    if(tipo == MESSAGE_TYPES.IS_NUMBER){
        return Expresions.numero.test(dato);
    }
    
    if(tipo == MESSAGE_TYPES.IS_LETTERS){
        return Expresions.letra.test(dato);
    }
        
    if(tipo == MESSAGE_TYPES.IS_MAIL){
        return Expresions.mail.test(dato);
    }
    
    if(tipo == MESSAGE_TYPES.IS_DATE){
        return Expresions.date.test(dato);
    }  

    if(tipo == MESSAGE_TYPES.IS_PHONE){
        return Expresions.phone.test(dato);
    }

    console.log("No hay datos coincidentes");
    return false;
};