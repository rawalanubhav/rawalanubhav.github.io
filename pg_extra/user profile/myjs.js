function opencity(evt, cityName){
  //Declare all variable
  var i, tabcontent, tablinks;
  // Get all elements with class = "tabcontent" and hide them
  for (i =0 ; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }
}
// Get all the elements with class ="tablinks" ans remove the class "active"
tablinks = document.getElementByClassName("tablinks");
for(i=0; i< tablinks.length; i++){
  tablinks[i].className = tablinks[i].className.replace("active","");
}

// Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
