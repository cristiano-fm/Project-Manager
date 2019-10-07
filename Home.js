"use strict";

$(document).ready(function() {
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    if (localStorage.key(i) != "current" && localStorage.key(i) != "currentTask" && localStorage.key(i) != "ruulzIndex"){
      $("#all-projects").append("<h3>"+ localStorage.key(i) +"</h3>");
    };
  }
});

$(document).on("click", "h3", function() {
  
  var proj = $(this).text();
  localStorage.setItem("current", proj);
  window.location.replace("ProjectPage.html");
});

$("#new-project-bt").click(function(){

  //console.log("???");
  var name = $('#new-proj-name').val();
  var description = $('#new-proj-description').val();
  localStorage.setItem(name, description);
  localStorage.setItem("current", name);
  window.location.replace("ProjectPage.html");
});