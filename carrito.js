
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
actualizarBotonCarrito();
console.log("agregue producto");  
    
} 

//FUNCION PARA VACIAR EL ARRAY CARRITO--
 

function vaciarCarrito(){
    localStorage.removeItem("elegidos");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();

}
 


//FUNCION PARA ACTUIALIZAR CARRITO--

function actualizarBotonCarrito() {
    let menu_elegido = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative m-4"><img src="images/cart.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${menu_elegido.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}


//FUNCION PARA ELIMINAR PRODUCTO POR PRODUCTO--
function eliminarProducto(id) {
    let menu_elegido = cargarProductosCarrito();
    let menu_elegido_actualizado = menu_elegido.filter(x => x.id != id);
    localStorage.setItem("elegidos", JSON.stringify(menu_elegido_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
    console.log(eliminarProducto);
}

//FUNCION PARA IMPRIMIR PRODUCTOS EN EL HTML--
function cargarProductosSeleccionados() {
    
    if (document.getElementById("carritoParaRellenar")) {
        
        let platosLunes = cargarProductosCarrito();
        let miPlato = document.getElementById("carritoParaRellenar");
        let contenido = "";

        if (platosLunes.length == 0) {
            contenido = "<p class='text-center bg-none p-3 mt-3'>No se encontraron Productos seleccionados!</p>";
            miPlato.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover ">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const miPlato of platosLunes) {
                contenido += `<tr>
                <td class="light">${miPlato.nombre}</td>
                <td class='text-end light'><b>$${miPlato.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${miPlato.id});'>[ X ]</button></td>
                </tr>`;
                total += miPlato.precio;
            }

            contenido += `<tr class="bg-light p-3">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            miPlato.innerHTML = contenido;

        }
    }
}
cargarProductosSeleccionados();
actualizarBotonCarrito();
document.getElementById("vaciar_carrito").addEventListener("click", vaciarCarrito); 

