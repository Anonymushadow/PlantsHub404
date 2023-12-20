export const Buscar = (searchBar, datos) => {
    console.log(searchBar.value.trim())
    if (searchBar.value && searchBar.value !== "") {
        const busqueda = searchBar.value.trim().toLowerCase();
        const resultados = datos.filter(dato => dato.nombreVulgar.toLowerCase().includes(busqueda));
        return resultados;
    } else {
        return datos;
    }
}