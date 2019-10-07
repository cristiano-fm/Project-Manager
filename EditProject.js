"use strict";

$(document).ready(function() {
    var projName = localStorage.getItem("current");
    var projDescription = localStorage.getItem(projName).split('|')[0];

    $("input[name='name']").val(projName);
    $("input[name='description']").val(projDescription);
});

$("#save-proj-bt").click(function(){

    var projName = localStorage.getItem('current');
    var proj = localStorage.getItem(projName);
    
    var newProjName = $("input[name='name']").val();
    var description = $("input[name='description']").val();

    proj = proj.split('|');
    proj[0] = description;
    proj = proj.join("|");

    localStorage.setItem(newProjName, proj);
    localStorage.removeItem(projName);
    localStorage.setItem("current", newProjName);

    window.location.replace("ProjectPage.html");
  });

  $("#delete-proj-bt").click(function(){
    if (confirm("Are you sure you want to delete this project?")){
        localStorage.removeItem(localStorage.getItem('current'));
        window.location.replace("Index.html");
    } else {};
  });
