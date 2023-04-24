var myArray = []
	

$.ajax({
    method:'GET',
    url:'./js/admin.json',
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
                        <td>${data[i].first_name}</td>
                        <td>${data[i].last_name}</td>
                        <td>${data[i].email}</td>
                        
                  </tr>`
        table.innerHTML += row


    }
}