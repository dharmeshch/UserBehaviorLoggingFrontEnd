$(document).ready(function(){
    var maxHits = 0;
    var elementNumber=0;
    var maxTimeSpent=0;
    var elementNumber1=0;
    var maxPosts = 0;
    var dateofPosts=0;
    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/getQuestionHits',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
        },
        success : function(data){
            var counter =0;
            console.log(data);
            var questionIdArray = [];
            var questionHitsArray = [];

            data.forEach(element => {
                if(element.questionHits>maxHits){
                    maxHits=element.questionHits;
                    elementNumber=counter+1;
                }
                questionHitsArray.push(element.questionHits);
                questionIdArray.push(++counter);
            });
            console.log(questionHitsArray);
            console.log(questionIdArray);
            sessionStorage.setItem('maxhits',maxHits);
            sessionStorage.setItem('elementnumber',elementNumber)
            var data = [{x:questionIdArray, y:questionHitsArray}];
            var layout = {
                title:'Number of clicks made by the user per question',
                xaxis: {
                    title: 'Question number'
                  },
                  yaxis: {
                    title: 'Number of hits'
                  }
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
            var counter =0;
            console.log(data);
            var questionIdArray = [];
            var questionTimeArray = [];
            data.forEach(element => {
                if(element[1]>maxTimeSpent){
                    maxTimeSpent=element[1];
                    elementNumber1=counter+1;
                }
                questionTimeArray.push(element[1]);
                questionIdArray.push(++counter);
            });
            console.log(questionTimeArray);
            console.log(questionIdArray);
            sessionStorage.setItem('maxtimespent',maxTimeSpent);
            sessionStorage.setItem('elementnumber1',elementNumber1)
            var data = [{x:questionIdArray, y:questionTimeArray, type:'bar'}];
            var layout = {
                title:'Time spent by the user on each question',
                xaxis: {
                    title: 'Question number'
                  },
                  yaxis: {
                    title: 'Time Spent(seconds)'
                  }
              };
            Plotly.newPlot('plot2', data,layout);
        },
        error : function(data){
            alert("Some error occured")
        }
    })

    $.ajax({
        type : 'GET',
        url : 'http://localhost:8080/getUsersPostsCount',
        headers: { 
            userName : sessionStorage.getItem('usernameGlobal'),  
            apiKey : sessionStorage.getItem('apiKeyGlobal'),
        },
        success : function(data){
            var counter =0;
            console.log(data);
            var dateArray = [];
            var postsCountArray = [];
            data.forEach(element => {
                if(element.postsCount>maxPosts){
                    maxPosts = element.postsCount;
                    dateofPosts = element.postedDate;
                }
                dateArray.push(element.postedDate);
                postsCountArray.push(element.postsCount);
            });
            console.log(dateArray);
            console.log(postsCountArray);
            sessionStorage.setItem('posteddate',dateofPosts);
            sessionStorage.setItem('maxposts',maxPosts);
            var data = [{values:postsCountArray, labels:dateArray, type:'pie'}];
            var layout = {
                title:'Number of posts posted by user in the last one week period',
                height:400,
                width:600
              };
            Plotly.newPlot('plot3', data,layout);
        },
        error : function(data){
            alert("Some error occured")
        }
    })
});

