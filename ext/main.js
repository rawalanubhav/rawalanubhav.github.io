$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 });

$(function() {
 $('[data-toggle="datepicker"]').datepicker({
   autoHide: true,
   zIndex: 2048,
 });
});