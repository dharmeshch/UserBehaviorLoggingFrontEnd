$(document).ready(function(){
    var count=0;
    // console.log(maxHits)
    $('#analysis').append('<li>For the first visualization, Line chart is plotted to visualize the number of clicks made the user on each question'+
    '. From the visualization it is clearly seen that the '+sessionStorage.getItem('elementnumber')+' question has the most number of hits i.e '+sessionStorage.getItem('maxhits') +' which means that user face the same issue many time, so he/she came back to view the question many times</li>'+
    '<li>For the second visualization, bar chart is plotted to visualize the average time spent by the user on each question'+
    '. From the visualization it is clearly seen that the '+sessionStorage.getItem('elementnumber1')+' question has the most average time spent i.e '+sessionStorage.getItem('maxtimespent') +' seconds which means that user took more time to understand the question</li>'+
    '<li>For the last visualization, pie chart is plotted to visualize the number of posts made by the user each day'+
    '. From the visualization it can be seen that the maximum posts were made on '+sessionStorage.getItem('posteddate')+' i.e '+sessionStorage.getItem('maxposts') +'</li>'
    )
});