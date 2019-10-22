"use strict";
var timer = document.getElementById("timer");

function coutdown() {
  timer.textContent--
  
if (timer.textContent == 0) {
	alert("Вы победили в конкурсе!");
	clearInterval(intervalId);
}
}
var intervalId = setInterval(coutdown, 1000);
