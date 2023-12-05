


const startApplication = ()=> {
    startLoginForm();
    startRegisterForm();

    productosOption.addEventListener("click", ()=> {
        searchBarContainer.classList.add("show__search__bar");
     })
}

window.addEventListener("load", ()=> {
    startApplication();
})