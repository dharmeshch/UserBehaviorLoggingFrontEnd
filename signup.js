$(function (){
    var name = $('#username');
    var password = $('#password');
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var confirmpassword = $('#confirmPassword');
    $('#submit').on('click',function(){
        $.ajax({
            type : 'POST',
            url : 'http://localhost:8080/signup',
            headers: { 
                userName : name.val(),  
                password : password.val(),
                firstName : firstname.val(),
                lastName : lastname.val(),
                confirmPassword : confirmpassword.val()
            },
            success : function(data){
            $('.container').append(''+ '<div class="alert alert-success" id ="success">'+
            '<<strong>Success!</strong>'+
            'Click <a href = "index.html">here!</a> to go to login page')    
            },
            error : function(data){
                alert('Error! user already exists')
            }
        })
    });
});