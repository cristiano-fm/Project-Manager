"use strict";

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
    
    
    if (projInfo[i][3] != "." && projInfo[i][3] != " " ){
      var date = projInfo[i][3].split(" ")[0];
      var y = date.split("-")[0];
      var m = date.split("-")[1];
      var d = date.split("-")[2];
      var time = projInfo[i][3].split(" ")[1];
      cell4.innerHTML = time + " - " + d + "/" + m + "/" + y;
    } else {
      cell4.innerHTML = ".";
    }

    if (projInfo[i][4] != "." && projInfo[i][4] != " " ){
      var date = projInfo[i][4].split(" ")[0];
      var y = date.split("-")[0];
      var m = date.split("-")[1];
      var d = date.split("-")[2];
      var time = projInfo[i][4].split(" ")[1];
      cell5.innerHTML = time + " - " + d + "/" + m + "/" + y;
    } else {
      cell5.innerHTML = ".";
    }

    if (projInfo[i][5] != ""){
      cell6.innerHTML = projInfo[i][5];
    } else {
      cell6.innerHTML = ".";
    }
    
    cell7.setAttribute("class", "edit-bt");
    cell7.innerHTML = "<a><img src ='media/edit.png' alt='return'></a>"
  };

  if(document.getElementById("project-tasks").rows.length == 1){
    $("#project-tasks").hide();
  }
});

$(document).on("click", ".edit-bt", function() {
  var row = $(this).parent().index();
  localStorage.setItem("currentTask", row);
  window.location.replace("EditTaskPage.html");
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
