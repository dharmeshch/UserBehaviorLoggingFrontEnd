$(document).ready(function(){
    var counter = 0;
    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/getStackOverflowPage',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
        },
        contentType: 'application/json;charset=utf-8',
        dataType : 'json',
        success : function(data){
            $(data).each(function(index, pageData){
                counter++;
                $('#accordion').append(''+'<div class="panel panel-default">'+
                    '<div class="panel-heading">'+
                    '<h4 class="panel-title">'+
                    '<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+counter+'">'+
                    pageData.question+
                    '</a>'+
                    '</h4>'+
                    '</div>'+
                    '<div id="collapse'+counter+'" class="panel-collapse collapse">'+
                    '<div class="panel-body">'+
                    pageData.detailedQuestion+
                    '</div>'+
                    '</div>'
                    )
            })
        },
        error : function(data){
            console.log(data);
            alert(data)
        }
    })
});

