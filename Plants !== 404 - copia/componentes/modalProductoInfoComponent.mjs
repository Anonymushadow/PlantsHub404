export const crearModalProductoComponent = (producto) => {
    let i = 0;
    let productInfoModalComponent = `
            <div class="modal__info__product">
            <div class="modal__info__product__close__button">X</div>
            <div class="modal__info__product__title__container">
                <h2 class="modal__info__product__title">${producto.nombreVulgar}</h2>
                <h3 class="modal__info__product__second__title">${producto.nombreCientifico}</h3>
            </div>
            <div class="modal__info__product__images__container">
                <button class="modal__info__product__button modal__info__product__button__prev"><</button>
                <img draggable="false" src="./images/practica/${producto.imagen[i]}" onerror="this.src='./images/practica/descarga.jpg'" alt="Imagen" class="modal__info__product__image">
                <button class="modal__info__product__button modal__info__product__button__next">></button>
            </div>
            <div class="modal__info__product__details__container">
                <h3 class="modal__info__product__details__price">$${producto.precio}</h3>
                <h3 class="modal__info__product__details__price__original">${producto.precioSinDescuento > 0 ? "$" + producto.precioSinDescuento : ""}</h3>
            </div>
            <div class="modal__info__product__data__container">
                <div class="modal__info__product__description__container">
                    <p class="modal__info__product__description">${producto.descripcion}</p>
                    <div class="modal__info__product__subdescription__container">
                        <p class="modal__info__product__cientific__name"><b>Nombre cientifico:</b> ${producto.nombreCientifico}</p>
                        <p class="modal__info__product__size"><b>Tamaño:</b> ${producto.tamaño}</p>
                        <p class="modal__info__product__color"><b>Color:</b> ${producto.colorFloracion}</p>
                        <p class="modal__info__product__epoca"><b>Epoca de floracion:</b> ${producto.epocaFloracion}</p>
                        <p class="modal__info__product__follaje"><b>Follaje:</b> ${producto.Follaje}</p>
                        <p class="modal__info__product__presentation"><b>Presentacion:</b> ${producto.presentacion}</p>
                        <p class="modal__info__product__category"><b>Categoria:</b> ${producto.tipo}</p>
                        <p class="modal__info__product__category"><b>Stock disponible:</b> ${producto.stock}</p>
                    </div>
                </div>
            </div>
            <div class="modal__info__product__buttons__container">
                <div class="modal__info__product__details__stock__container">
                    <button class="modal__info__product__details__decrement">-</button>
                    <p class="modal__info__product__details__stock">${producto.stock > 0 ? 1 : 0}</p>
                    <button class="modal__info__product__details__increment">+</button>
                </div>
                <button class="modal__info__product__add__to__cart ${producto.stock > 0 ? "" : "disabled__button"}">Añadir al carrito</button>
            </div>
            </div>
`;
    return productInfoModalComponent;
}