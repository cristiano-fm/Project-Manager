"use strict";

$(document).ready(function() {
  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    if (localStorage.key(i) != "current" && localStorage.key(i) != "currentTask" && localStorage.key(i) != "ruulzIndex"){
      $("#all-projects").append("<h3>"+ localStorage.key(i) +"</h3>");
    };
  }
});

$(document).ready(function() {
  var proj = localStorage.getItem("current");
  var projInfo = localStorage.getItem(proj);

  $("#project-title").append(proj);
  projInfo = projInfo.split('|');
  $("#project-description").append(projInfo[0]);

  for (var data=1; data < projInfo.length; data++){
    projInfo[data] = projInfo[data].split(';');
  }
  var table = document.getElementById("project-tasks");

  for(var i=1; i<projInfo.length; i++){
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.innerHTML = projInfo[i][0];
    cell2.innerHTML = projInfo[i][1];
    cell3.innerHTML = projInfo[i][2];
    cell4.innerHTML = projInfo[i][3];
    cell5.innerHTML = projInfo[i][4];
    cell6.innerHTML = projInfo[i][5];
    cell7.setAttribute("class", "edit-bt");
    cell7.innerHTML = "<a><img src ='media/edit.png' alt='return'></a>"
  };
});

$(document).on("click", "h3", function() {
  
  var proj = $(this).text();
  localStorage.setItem("current", proj);
  window.location.replace("ProjectPage.html");
});

$(document).on("click", ".edit-bt", function() {
  var row = $(this).parent().index();
  console.log(row);
  localStorage.setItem("currentTask", row);
  window.location.replace("EditTaskPage.html");
});

$("#new-project-bt").click(function(){

  //console.log("???");
  var name = $('#new-proj-name').val();
  var description = $('#new-proj-description').val();
  localStorage.setItem(name, description);
  localStorage.setItem("current", name);
  window.location.replace("ProjectPage.html");
});


$("#new-task-bt").click(function(){

  var projName = localStorage.getItem('current');
  var proj = localStorage.getItem(projName);

  var description = $('#new-task-description').val();
  var responsable = $('#new-task-responsable').val();

  proj = proj + "|" + description + ";" + responsable + ";Planned;.;.;.";
  localStorage.setItem(projName, proj);
  window.location.replace("ProjectPage.html");
});
