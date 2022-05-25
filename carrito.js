
//FUNCION PARA BUSCAR COMIDA DEL MENU LUNES--
function buscarProducto (id){
    let platosLunes = cargarProductosLunLS();
    return platosLunes.find(x => x.id == id);
};

//FUNCION PARA QUE CADA PRODUCTO SE ACUMULE--
function cargarProductosCarrito() {
    if (localStorage.getItem("elegidos")) {
        return JSON.parse(localStorage.getItem("elegidos"));
    }
    return [];
}

//FUNCION PARA AGREGAR AL CARRITO--
function agregarAlCarrito(id){
let eleccion = buscarProducto(id);
let menu_elegido = cargarProductosCarrito();
menu_elegido.push (eleccion)
localStorage.setItem("elegidos", JSON.stringify (menu_elegido));
    
    
} 

//FUNCION PARA VACIAR EL ARRAY CARRITO--
document.getElementById("vaciarCarrito").addEventListener("click", vaciarCarrito); 

function vaciarCarrito(){
    localStorage.removeItem("elegidos");
    
}

//FUNCION PARA IMPRIMIR PRODUCTOS EN EL HTML--
function cargarProductosSeleccionados() {
    if (document.getElementById("carritoParaRellenar")) {
        let platosLunes = cargarProductosCarrito();
        let elegidos = document.getElementById("carritoParaRellenar");
        let contenido = "";

        if (platosLunes.length == 0) {
            contenido = "<p class='text-center bg-none p-3'>No se encontraron Productos seleccionados!</p>";
            elegidos.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const elegidos of platosLunes) {
                contenido += `<tr>
                <td>${elegidos.nombre}</td>
                <td class='text-end shadow_none'><b>$${elegidos.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${elegidos.id});'>[ X ]</button></td>
                </tr>`;
                total += elegidos.precio;
            }

            contenido += `<tr class="bg-light">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            elegidos.innerHTML = contenido;
        }
    }
}
cargarProductosSeleccionados();