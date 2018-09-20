var questionNumber = 0;
var startTimestamp = 0;
var secondTime=0;
$(document).ready(function(){
    var counter = 2;
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
                    '<a data-toggle="collapse" data-parent="#accordion" onclick = "logQuestion('+ pageData.id+')" href="#collapse'+counter+'">'+
                    pageData.question+
                    '</a>'+
                    '</h4>'+
                    '</div>'+
                    '<div id="collapse'+counter+'" class="panel-collapse collapse">'+
                    '<div class="panel-body">'+
                    pageData.detailedQuestion+"<br />"+
                    '<a class="like" onclick="addvotes('+pageData.id+')"><i class="fa fa-thumbs-o-up"></i>'+
                    'Like </a>'+
                    '<label class="qty1"  id="qty1">'+pageData.votes+'</label>'+
                    '<a class="dislike" onclick="adddislikes('+ pageData.id+')"><i class="fa fa-thumbs-o-down"></i>' +
                    'Dislike </a>'+
                    '<label class="qty2"  id="qty2">'+pageData.dislikes + '</label>'+
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
function logQuestion(param1){
    logQuestionHit(param1);
    console.log("check")
    if(secondTime == 1){
        var timeSpent = (Math.floor(Date.now() / 1000)) - startTimestamp;
        $.ajax({
            type : 'POST',
            url : 'http://localhost:8080/logQuestionViewTime',
            headers: { 
                userName : sessionStorage.getItem('usernameGlobal'),  
                apiKey : sessionStorage.getItem('apiKeyGlobal'),
                duration : timeSpent,
                questionId : param1
            },
            success : function(data){
                console.log("logged")
            },
            error : function(data){
                console.log(data);
            }
        })
    }
    startTimestamp = Math.floor(Date.now() / 1000);
    secondTime=1;
    if(questionNumber ==param1){
        secondTime=0;
    }
    questionNumber = param1;
}

function logQuestionHit(param1){
    console.log(param1),
    $.ajax({
        type : 'POST',
        url : 'http://localhost:8080/logQuestionHits',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
            count : 1,
            questionId : param1
        },
    })     
}

function addvotes(questionid){
    console.log(questionid);
    var content = $('#qty1').html();
    content++;
    $('#qty1').empty();
    $('#qty1').html(content);
    $.ajax({
        type : 'POST',
        url : 'http://localhost:8080/postlike',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
            questionId : questionid
        },
    }) 
}

function adddislikes(questionid){
    var content = $('#qty2').html();
    content++;
    $('#qty2').empty();
    $('#qty2').html(content);
    console.log(questionid),
    $.ajax({
        type : 'POST',
        url : 'http://localhost:8080/postdislike',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
            questionId : questionid
        },
    }) 
}