export const productosComponent = (productos, contenedor) => {
    productos.forEach(producto => {
        let productosComponentDatos = `
            <div class="card" id="${producto.id}">
            <div class="card__image__container">
                <img draggable="false" onerror="this.src='./images/practica/descarga.jpg'" src="./images/practica/${producto.imagen[0]}" alt="Planta" class="card__image">
            </div>
            <div class="card__information">
                <h2 class="card__information__title">${producto.nombreVulgar}</h2>
                <p class="card__information__description">${producto.descripcion}</p>
                <div class="card__information__precio__container">
                    <p class="card__information__precio">$${producto.precio}</p>
                    <p class="card__information__precio__sin__desceunto">${producto.precioSinDescuento == 0 ? "" : "$" + producto.precioSinDescuento}</p>
                </div>
                <div class="card__buttons__container">
                    <button class="card__button__ver__detalles" id="detalles__id__${producto.id}">Ver detales</button>
                    <button class="card__button__agrergar__carrito" id="carrito__id__${producto.id}">Añadir al carrito</button>
                </div>
            </div>
        </div>
        <div class="modal__info__product__container"></div>
            `;

        contenedor.innerHTML += productosComponentDatos;
    });

    return contenedor;
}