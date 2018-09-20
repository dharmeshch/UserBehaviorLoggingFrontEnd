$(document).ready(function(){
    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/getQuestionHits',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
        },
        success : function(data){
            console.log(data);
            var questionIdArray = [];
            var questionHitsArray = [];
            data.forEach(element => {
                questionHitsArray.push(element.questionHits);
                questionIdArray.push(element.questionId);
            });
            console.log(questionHitsArray);
            console.log(questionIdArray);
            var data = [{x:questionIdArray, y:questionHitsArray}];
            var layout = {
                title:'Number of clicks made by the user per question'
              };
            Plotly.newPlot('plot1', data, layout);
        },
        error : function(data){
            alert("Some error occured")
        }
    }) 
    
    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/getQuestionViewTime',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
        },
        success : function(data){
            console.log(data);
            var questionIdArray = [];
            var questionTimeArray = [];
            data.forEach(element => {
                questionTimeArray.push(element[1]);
                questionIdArray.push(element[0]);
            });
            console.log(questionTimeArray);
            console.log(questionIdArray);
            var data = [{x:questionIdArray, y:questionTimeArray}];
            var layout = {
                title:'Time spent by the user on each question in seconds'
              };
            Plotly.newPlot('plot2', data,layout);
        },
        error : function(data){
            alert("Some error occured")
        }
    })
});

