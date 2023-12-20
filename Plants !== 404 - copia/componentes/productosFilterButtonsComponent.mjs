export let filterButtons = `
        <div class="filters__buttons">
        <div class="dropdown">
            <button class="order__selector">Ordenar</button>
            <div class="dropdown__content dropdown__content__order">
                <p class="dropdown__option dropdown__order dropdown__order__selected dropdown__order__fecha">Por fecha</p>
                <p class="dropdown__option dropdown__order dropdown__order__menor__precio">Menor Precio</p>
                <p class="dropdown__option dropdown__order dropdown__order__mayor__precio">Mayor precio</p>
                <p class="dropdown__option dropdown__order dropdown__order__mayor__tamaño">Mayor Tamaño</p>
                <p class="dropdown__option dropdown__order dropdown__order__menor__tamaño">Menor Tamaño</p>
            </div>
        </div>
        <div class="dropdown">
            <button class="filter__selector">Filtrar</button>
            <div class="dropdown__content dropdown__content__filter">
                <p class="dropdown__option dropdown__filter dropdown__filter__selected dropdown__filter__todos">Todos</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__stock">Con stock</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__descuento">Descuentos</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__enredaderas">Enredaderas</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__arbustos">Arbustos</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__arboles">Arboles</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__coniferas">Coniferas</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__herbaceas">Herbaceas</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__macetas">En maceta</p>
                <p class="dropdown__option dropdown__filter dropdown__filter__raiz">A raiz descubierta</p>
            </div>
        </div>
        </div>

        <div class="productos__container"></div>
`;