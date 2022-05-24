function guardarDatos(){
    let campo__alias = document.getElementById("alias").value;
    let campo__domicilo = document.getElementById("domicilio").value;
  
  //Asi las llamarias
    let mensaje = `alias: ${campo__alias} - domicilio: ${campo__domicilo}`;
    console.log(mensaje);
    alert(mensaje);
  }
  
  
   guardarDatos()

   //Asi se ve tu codigo
function guardarDatos(){
    //aqui guardas tus values en variables
      let campo__alias = document.getElementById("alias").value;
      let campo__domicilo = document.getElementById("domicilio").value;
    
    //pero aca no las estas llamando por sus nombres.
      let mensaje = `alias: ${alias} - domicilio: ${domicilio}`;
      console.log(mensaje);
      alert(mensaje);
    }
    
    
     guardarDatos()