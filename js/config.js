$(document).ready(function(){

$('.btm').on("click",function(e){ 
     e.preventDefault();
    $('.sub2').slideToggle();
    $('.botao1', this).attr('src',"imgmobile/botao-menu-aberto.png" );

});

});