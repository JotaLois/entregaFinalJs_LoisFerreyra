const menuLunes = [
    {id:1, nombre:"Hamburguesa", imagen:"Hamburguesa.png", precio:700},
    {id:2, nombre:"Muzzarella", imagen:"pizza.jpg",  precio:1250},
    {id:3, nombre:"Pastas", imagen:"pastas.jpg", precio:500},
    {id:4, nombre:"Empanadas", imagen:"empanadas.jpg", precio:700},]

const menuMartes = [
    {id:1, nombre:"Filet", imagen:"filet.jpg", precio:700},
    {id:2, nombre:"Bombas de papa", imagen:"bombasDePapa.jpg",  precio:400},
    {id:3, nombre:"Pastas", imagen:"pastas.jpg", precio:500},
    {id:4, nombre:"Empanadas", imagen:"empanadas.jpg", precio:700},]

const menuMiercoles = [
    {id:1, nombre:"Costillitas", descripcion:"",  imagen:"costillitas.jpg", precio:600},
    {id:2, nombre:"Guiso de lentejas", descripcion:"", imagen:"guiso.jpg",  precio:600},
    {id:3, nombre:"Pastas", descripcion:"",  imagen:"pastas.jpg", precio:500},
    {id:4, nombre:"Empanadas", descripcion:"",  imagen:"empanadas.jpg", precio:700},]

const menuJueves = [
    {id:1, nombre:"Pollo al horno", descripcion:"",  imagen:"pollo.jpg", precio:700},
    {id:2, nombre:"Pastel de papa", descripcion:"", imagen:"pastel.jpg",  precio:500},
    {id:3, nombre:"Pastas", descripcion:"",  imagen:"pastas.jpg", precio:500},
    {id:4, nombre:"Empanadas", descripcion:"",  imagen:"empanadas.jpg", precio:700},]

const menuViernes = [
    {id:1, nombre:"Napo con fritas", descripcion:"",  imagen:"napo.jpg", precio:500},
    {id:2, nombre:"Suprema con ensalada", descripcion:"", imagen:"suprema.jpg",  precio:400},
    {id:3, nombre:"Pastas", descripcion:"",  imagen:"pastas.jpg", precio:500},
    {id:4, nombre:"Empanadas", descripcion:"",  imagen:"empanadas.jpg", precio:700},]


//funciones LocalStorage

//..Lun
const guardarMenuLunesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
for (const menu of menuLunes) {
    guardarMenuLunesLS("menuLunes", JSON.stringify(menuLunes));
    console.log("El menu del lunes es: " + localStorage.getItem("menuLunes"));
}
function cargarProductosLunLS() {
    return JSON.parse(localStorage.getItem("menuLunes"));
}

//--Mar
const guardarMenuMartesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
for (const menu of menuMartes) {
    guardarMenuMartesLS("menuMartes", JSON.stringify(menuMartes));
    console.log("El menu del martes es: " + localStorage.getItem("menuMartes"));
}
function cargarProductosMarLS() {
    return JSON.parse(localStorage.getItem("menuMartes"));
}

//--Mierc
const guardarMenuMiercolesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
for (const menu of menuMiercoles) {
    guardarMenuMiercolesLS("menuMiercoles", JSON.stringify(menuMiercoles));
    console.log("El menu del miercoles es: " + localStorage.getItem("menuMiercoles"));
}
function cargarProductosMiercLS() {
    return JSON.parse(localStorage.getItem("menuMiercoles"));
}

//--Jue
const guardarMenuJuevesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
for (const menu of menuJueves) {
    guardarMenuMartesLS("menuJueves", JSON.stringify(menuJueves));
    console.log("El menu del Jueves es: " + localStorage.getItem("menuJueves"));
}
function cargarProductosJueLS() {
    return JSON.parse(localStorage.getItem("menuJueves"));
}

//--Vier
const guardarMenuViernesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
for (const menu of menuViernes) {
    guardarMenuMartesLS("menuViernes", JSON.stringify(menuViernes));
    console.log("El menu del viernes es: " + localStorage.getItem("menuViernes"));
}
function cargarProductosVierLS() {
    return JSON.parse(localStorage.getItem("menuViernes"));
}

//Menues
//LUNES----------------
function cargarMenuesLun() {
    let platosLunes = cargarProductosLunLS();
    let contenido = "";

    for (const platosLun of platosLunes) {
        contenido +=
     `<div class="card m-2 shadow-lg style="width: 18rem;">
        <img src="./images/${platosLun.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosLun.nombre}</h5>
          <p class="card-text">$${platosLun.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
        </div>
      </div>`;
    }

    document.getElementById("opcionesLunes").innerHTML = contenido;
}
guardarMenuLunesLS(menuLunes);
cargarMenuesLun();

//MARTES---------------
function cargarMenuesMar() {
    let platosMartes = cargarProductosMarLS();
    let contenido = "";

    for (const platosMar of platosMartes) {
        contenido += `<div class="card m-2 shadow-lg style="width: 18rem;" >
        <img src="./images/${platosMar.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosMar.nombre}</h5>
          <p class="card-text">$${platosMar.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
        </div>
      </div>`;
    }

    document.getElementById("opcionesMartes").innerHTML = contenido;
}
guardarMenuMartesLS(menuMartes);
cargarMenuesMar();

//MIERCOLES---------------
function cargarMenuesMierc() {
    let platosMiercoles = cargarProductosMiercLS();
    let contenido = "";

    for (const platosMierc of platosMiercoles) {
        contenido += `<div class="card m-2 shadow-lg style="width: 18rem;" >
        <img src="./images/${platosMierc.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosMierc.nombre}</h5>
          <p class="card-text">$${platosMierc.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
        </div>
      </div>`;
    }

    document.getElementById("opcionesMiercoles").innerHTML = contenido;
}
guardarMenuMiercolesLS(menuMiercoles);
cargarMenuesMierc();

//JUEVES--------------------
function cargarMenuesJue() {
    let platosJueves = cargarProductosJueLS();
    let contenido = "";

    for (const platosJue of platosJueves) {
        contenido += `<div class="card m-2 shadow-lg style="width: 18rem;" >
        <img src="./images/${platosJue.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosJue.nombre}</h5>
          <p class="card-text">$${platosJue.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
        </div>
      </div>`;
    }

    document.getElementById("opcionesJueves").innerHTML = contenido;
}
guardarMenuJuevesLS(menuJueves);
cargarMenuesJue();

//VIERNES--------------------
function cargarMenuesVier() {
    let platosViernes = cargarProductosVierLS();
    let contenido = "";

    for (const platosVier of platosViernes) {
        contenido += `<div class="card m-2 shadow-lg style="width: 10rem;" >
        <img src="./images/${platosVier.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosVier.nombre}</h5>
          <p class="card-text">$${platosVier.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
        </div>
      </div>`;
    }

    document.getElementById("opcionesViernes").innerHTML = contenido;
}
guardarMenuViernesLS(menuJueves);
cargarMenuesVier();