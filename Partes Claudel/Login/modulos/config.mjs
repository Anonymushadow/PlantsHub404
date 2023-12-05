export const obtenerElementosParaLogin = () => {
    const loginButton = document.querySelector("");
    const registerlink = document.querySelector("");
    const loginEmailInput = document.querySelector("");
    const loginPasswordInput = document.querySelector("");
  
    return {
      loginButton,
      registerlink,
      loginEmailInput,
      loginPasswordInput,
    };
  };
  
  export const obtenerElementosParaRegistro = () => {
    const [loginEmailInput, loginPasswordInput] = obtenerElementosParaLogin();
    const registerButton = document.querySelector("");
    const loginDNIInput = document.querySelector("");
    const loginlink = document.querySelector("");
  
    return {
      loginButton,
      loginEmailInput,
      loginPasswordInput,
      registerButton,
      loginlink,
      loginDNIInput,
    };
  };
  