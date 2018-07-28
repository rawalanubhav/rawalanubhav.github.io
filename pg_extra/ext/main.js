var status = "less";

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


function name_col(){
  data = document.getElementById("nam_but").closest();
  alert(data);
    if (status=="less"){
        document.getElementById("nam_but").innerText = "Less Details";
        status ="more";
    }else if(status == "more"){
        document.getElementById("nam_but").innerText = "More Details";
        status ="less";
    }
}