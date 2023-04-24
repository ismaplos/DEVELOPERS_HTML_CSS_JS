
function cargarDatosPortafolio(){

    fetch('../js/datos.json')
        .then(function(respuesta){          
            return respuesta.json();
        }).then(function(datos){  

          let html= '';          
          console.log(datos);
          datos.portafolio.forEach(element => {
            html += `
            <div class="elemento">            
            <img src="/rsc/blog - copia/img/${element.id}.jpg" alt="">
          </div>
            `
          });

          //Cargo los trabajos en el listados
          document.getElementById("listado").innerHTML = html;
          
        }).catch(function(error){
          document.getElementById("listado").innerHTML = '<p>De momento no hay trabajos</p>';
        })

}


document.addEventListener('DOMContentLoaded',function(){
  cargarDatosPortafolio();  
})