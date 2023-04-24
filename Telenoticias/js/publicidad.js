
function traerdatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './publicidad.json',true);
    xhttp.send();

    xhttp.onreadystatechange=function(){


        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);

            let datos=JSON.parse();
            let res=document.querySelector('#res');
            res.innerHTML='';

            for(let  i of datos){
                res.innerHTML+=`
                <tr>
                      <td>${i.Servicio}</td>
                      <td>${i.Precio}</td>
                      <td>${i.Tiempo}</td>
                  </tr>
                
                
                `

            }
        }





    }

}