$(document).ready(function(){
    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/getUserDetails',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
        },
        contentType: 'application/json;charset=utf-8',
        dataType : 'json',
        success : function(data){
            $('#userdetails').append(''+'<tbody>'+
                '<td>'+data.firstName+'</td>'+
                '<td>'+data.lastName+'</td>'+
                '<td>'+data.userName+'</td>'+
                '</tbody>'
            )
        },
        error : function(data){
            console.log(data);
            alert(data)
        }
    })
});