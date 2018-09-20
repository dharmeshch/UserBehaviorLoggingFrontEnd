$(function (){
    var desc = $('#description1');
    var detaileddesc = $('#detailedDescription1');
    $('#postSubmit').on('click',function(){
        $.ajax({
            type : 'POST',
            url : 'http://localhost:8080/postQuestion',
            headers: { 
                userName : sessionStorage.getItem('usernameGlobal'),  
                apiKey : sessionStorage.getItem('apiKeyGlobal'),
                description : desc.val(),
                detailedDescription : detaileddesc.val()
            },
            success : function(data){
                window.location.href ="secondPage.html";
            },
            error : function(data){
                alert("error posting to database")
            }
        })
       
    });
});

function logout(){
    sessionStorage.clear();
    window.location.href= "index.html";
}