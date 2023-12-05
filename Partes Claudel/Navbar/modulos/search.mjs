export const Buscar = (searchBar, datos) => {
    if (searchBar.value || searchBar.value != "") {
        const busqueda = searchBar.value.trim().toLowerCase();
        const resultados = datos.filter(dato => dato.name.toLowerCase().includes(busqueda));
        return resultados;
    }else{
        return datos;
    }
}