'use strict'

$(document).ready(function() {
  let setTimeoutId = undefined;
  let startTime = 0;
  let currentTime = 0;
  let elapsedTime = 0;

function runTimer(){
  currentTime = Date.now();
  showTime();
  setTimeoutId = setTimeout(() => {
  runTimer();
  },10)
}
  
function showTime(){
  let d = new Date(currentTime - startTime + elapsedTime);
  const getHours = Math.floor(d.getHours() - 9);
  const getMinutes = d.getMinutes();
  const getSeconds =d.getSeconds();
  const getMilliseconds = Math.floor(d.getMilliseconds() / 100);
$("#timer").text(`${String(getHours).padStart(1,'0')}:${String(getMinutes).padStart(1,'0')}:${String(getSeconds).padStart(1,'0')}:${String(getMilliseconds).padStart(1,'0')}`);
}

function classReplacementRun()  {
  $("#start").addClass("disabled");
  $("#stop").removeClass("disabled");
  $("#reset").removeClass("disabled");
}

function classReplacementStop()  {
  $("#start").removeClass("disabled");
  $("#stop").addClass("disabled");
  $("#reset").removeClass("disabled");
}

function classReplacementInitial()  {
  $("#start").removeClass("disabled");
  $("#stop").addClass("disabled");
  $("#reset").addClass("disabled");
}

$("#start").click(function() {
  if($(this).hasClass('disabled')){
      return;
  }
  classReplacementRun()
  startTime = Date.now();
  runTimer();
});

$("#stop").click(function() {
  if($(this).hasClass('disabled')){
      return;
  }
  classReplacementStop()
  elapsedTime += currentTime - startTime;
  clearTimeout(setTimeoutId);
});

$("#reset").click(function() {
  if($(this).hasClass('disabled')){
      return;
  }
  classReplacementInitial()
  clearTimeout(setTimeoutId);
  elapsedTime = 0
$("#timer").text("0:0:0:0");
  });

});




