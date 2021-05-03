

$(".fa-moon ").on('click', function(){
   

    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
   
});