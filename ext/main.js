$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 });

// $(function() {
//  $('[data-toggle="datepicker"]').datepicker({
//    autoHide: true,
//    zIndex: 2048,
//  });
// });
$(function () {
  $('#datetimepicker3').datetimepicker({
      format: 'LT'
  });
});

$(function () {
  $('#datetimepicker4').datetimepicker({
    format: 'L'
  });
});

function rld(){
  location.reload();
}

