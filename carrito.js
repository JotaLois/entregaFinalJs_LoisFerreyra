function buscarProducto(id) {
    let menuLunes = cargarProductosLS();

    return menuLunes.find(x => x.id == id);
}