$(document).ready(function(){
    var count=0;
    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/getLoginHistory',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
        },
        contentType: 'application/json;charset=utf-8',
        dataType : 'json',
        success : function(data){
            $('#loginhistory').append(''+'<tbody>')
            $(data).each(function(index, pageData){
                count++;
                $('#loginhistory').append(''+'<tr>'+
                '<td>'+count+'</td>'+
                '<td>'+pageData.lastLoginTime+'</td>'+
                '</tr>'
            )
            })
            $('#loginhistory').append(''+'<tbody>')
        },
        error : function(data){
            console.log(data);
            alert(data)
        }
    })
});