"use strict";

$(document).ready(function() {
    var proj = localStorage.getItem("current");
    var task = localStorage.getItem("currentTask");
    var proj = localStorage.getItem(proj);

    proj = proj.split('|');
    task = proj[task];
    task = task.split(';');

    $("input[name='description']").val(task[0]);
    $("input[name='responsable']").val(task[1]);
    $("select[name='state']").val(task[2]);

    if (task[3] != "."){
        var start = task[3].split(' ');
        var startDay = start[0];
        var startTime = start[1];
        $("input[name='start-day']").val(startDay);
        $("input[name='start-time']").val(startTime);
    }

    if (task[4] != "."){
        var end = task[4].split(' ');
        var endDay = end[0];
        var endTime = end[1];
        $("input[name='end-day']").val(endDay);
        $("input[name='end-time']").val(endTime);
    }

    if (task[5] != "."){
        $("input[name='duration']").val(task[5]);
    }
});

$("#save-task-bt").click(function(){

    var projName = localStorage.getItem('current');
    var proj = localStorage.getItem(projName);
  
    var description = $("input[name='description']").val();
    var responsable = $("input[name='responsable']").val();
    var state = $("select[name='state']").val();
    var start = $("input[name='start-day']").val().toString() + " " + $("input[name='start-time']").val();
    var end = $("input[name='end-day']").val().toString() + " " + $("input[name='end-time']").val();
    var duration = $("input[name='duration']").val();
    if(start == " "){
        start = ".";
    }
    if(end == " "){
        end = ".";
    }

    var newTask = description + ";" + responsable + ";" + state + ";" + start + ";" + end + ";" + duration;
  
    proj = proj.split('|');
    var taskNumb = localStorage.getItem("currentTask");

    proj[taskNumb] = newTask;
    proj = proj.join("|");
    //console.log(proj);
    localStorage.setItem(projName, proj);
    window.location.replace("ProjectPage.html");
  });

  $("#delete-task-bt").click(function(){
    if (confirm("Are you sure you want to delete this task?")){
        var projName = localStorage.getItem('current');
        var proj = localStorage.getItem(projName);

        proj = proj.split('|');
        var taskNumb = localStorage.getItem("currentTask");
        proj.splice(taskNumb, 1);

        proj = proj.join("|");
        localStorage.setItem(projName, proj);
        window.location.replace("ProjectPage.html");
    } else {}
  });