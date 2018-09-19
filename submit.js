$(function (){
    var name = $('#username');
    var password = $('#password');
    var demo = $('#check');
    console.log("check")
    $('#submit').on('click',function(){
        console.log('hello');
        console.log(name.val()+' '+password.val());
        $.ajax({
            type : 'POST',
            url : 'http://localhost:8080/login',
            headers: { 
                userName : name.val(),  
                password : password.val()
            },
            success : function(data){
                console.log(data);
                sessionStorage.setItem('usernameGlobal', name.val());
                sessionStorage.setItem('apiKeyGlobal',data);
                console.log(sessionStorage.getItem('usernameGlobal'));
                window.location.href ="secondPage.html";
            },
            error : function(data){
                console.log(data);
                alert(data)
            }
        })
       
    });
});