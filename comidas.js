

//funciones LocalStorage

//..Lun
/*function guardarMenuLunesLS  (nombre, precio)  { localStorage.setItem(nombre, precio) };
for (const menu of menuLunes) {
    guardarMenuLunesLS("menuLunes", JSON.stringify(menuLunes));
    console.log("El menu del lunes es: " + localStorage.getItem("menuLunes"));
}
function cargarProductosLunLS() {
    return JSON.parse(localStorage.getItem("menuLunes"));
}
/*
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
}*/

//Menues---------------------------------------------------------------------------------------------------------------

//LUNES----------------
document.getElementById('btnPrincipal').addEventListener('click', cargarMenuLunes);
function cargarMenuLunes (){
    fetch('menuLunes.json')
        .then (function(res){
        return res.json();
        })
        .then (function (menuLunes){
            let contenido = "";
            for (const platosLun of menuLunes) {
                contenido += `<div class="card m-2 shadow-lg style="width: 18rem;" >
                <img src="./images/${platosLun.imagen}" class="card-img-top" alt="...">
                <div class="card-body ">
                  <h5 class="card-title">${platosLun.nombre}</h5>
                  <p class="card-text">$${platosLun.precio}</p>
                  <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
                </div>
              </div>`;
            }
            document.getElementById("opcionesLunes").innerHTML = contenido;  
    
        })         
}

//MARTES---------------
document.getElementById('btnPrincipal2').addEventListener('click', cargarMenuMartes);
function cargarMenuMartes (){
    fetch('menuMartes.json')
        .then (function(res){
        return res.json();
        })
        .then (function (menuMartes){
            let contenido = "";
            for (const platosMar of menuMartes) {
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
    
        })          
}

//MIERCOLES---------------
document.getElementById('btnPrincipal3').addEventListener('click', cargarMenuMiercoles);
function cargarMenuMiercoles (){
    fetch('menuMiercoles.json')
        .then (function(res){
        return res.json();
        })
        .then (function (menuMiercoles){
            let contenido = "";
            for (const platosMie of menuMiercoles) {
                contenido += `<div class="card m-2 shadow-lg style="width: 18rem;" >
                <img src="./images/${platosMie.imagen}" class="card-img-top" alt="...">
                <div class="card-body ">
                  <h5 class="card-title">${platosMie.nombre}</h5>
                  <p class="card-text">$${platosMie.precio}</p>
                  <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
                </div>
              </div>`;
            }
            document.getElementById("opcionesMiercoles").innerHTML = contenido;  
    
        })
        
            
}

//JUEVES--------------------
document.getElementById('btnPrincipal4').addEventListener('click', cargarMenuJueves);
function cargarMenuJueves (){
    fetch('menuJueves.json')
        .then (function(res){
        return res.json();
        })
        .then (function (menuJueves){
            let contenido = "";
            for (const platosJue of menuJueves) {
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
    
        })
        
            
}

//VIERNES--------------------
document.getElementById('btnPrincipal5').addEventListener('click', cargarMenuViernes);
function cargarMenuViernes (){
    fetch('menuViernes.json')
        .then (function(res){
        return res.json();
        })
        .then (function (menuViernes){
            let contenido = "";
            for (const platosVier of menuViernes) {
                contenido += `<div class="card m-2 shadow-lg style="width: 18rem;" >
                <img src="./images/${platosVier.imagen}" class="card-img-top" alt="...">
                <div class="card-body ">
                  <h5 class="card-title">${platosVier.nombre}</h5>
                  <p class="card-text">$${platosVier.precio}</p>
                  <a href="#" class="btn btn-primary agregarProducto">Comprar</a>
                </div>
              </div>`;
            }
            document.getElementById("opcionesViernes").innerHTML = contenido;  
    
        })
        
            
}
guardarMenuViernesLS(menuViernes);
cargarMenuVier();






