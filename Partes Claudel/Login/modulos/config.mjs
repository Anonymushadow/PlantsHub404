export const obtenerElementosParaLogin = () => {
    const loginButton = document.querySelector(".login__form__send__button");
    const registerlink = document.querySelector(".login__register__link");
    const loginEmailInput = document.querySelector(".login__form__input__email");
    const loginPasswordInput = document.querySelector(".login__form__input__password");
    const formulario = document.querySelector(".login__form");
  
    return {
      loginButton,
      registerlink,
      loginEmailInput,
      loginPasswordInput,
      formulario
    };
  };
  
  export const obtenerElementosParaRegistro = () => {
    const loginEmailInput = document.querySelector(".login__form__input__email");
    const loginPasswordInput = document.querySelector(".login__form__input__password");
    const registerButton = document.querySelector("");
    const loginDNIInput = document.querySelector("");
    const loginlink = document.querySelector("");
    const formulario = document.querySelector(".login__form");
  
    return {
      loginButton,
      loginEmailInput,
      loginPasswordInput,
      registerButton,
      loginlink,
      loginDNIInput,
      formulario
    };
  };
  