var myArray = []
	

$.ajax({
  method:'GET',
  url:'./js/carrito.json',
  success:function(response){
    myArray = response.data
    buildTable(myArray)
    console.log(myArray)
  }
})



function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++){
    var row = `<tr>
            <td>${data[i].servicio}</td>
            <td>${data[i].precio}</td>
            <td>${data[i].tiempo}</td>
          </tr>`
    table.innerHTML += row


  }
}
