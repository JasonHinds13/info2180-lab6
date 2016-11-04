$(document).ready(function(){
    $("#search").on('click', function(){
       var query = $("#query").val();
       var link = "https://info2180-lab6-jasonhinds13.c9users.io/request.php?q="+query;
       
       $.ajax(link, {
           method: 'GET',
       }).done(function(res){
           $("#result").html(res);
       }).fail(function(err){
           $("#result").html(err);
       });
    });
});