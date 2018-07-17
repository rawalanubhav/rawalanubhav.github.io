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
function click1() {
    alert("Your Order has been confirmed. Please confirm your order number "008257" with technician for the verification.");
}

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

