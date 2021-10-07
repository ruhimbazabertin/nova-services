//Javascript to make header fit in windows height
$(document).ready(function(){
 $('.header').height($(window).height());
 
})

//Javascript scroll effect
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })

