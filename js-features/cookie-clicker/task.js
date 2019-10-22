"use strict";
var clickerCounter = document.getElementById("clicker__counter");
var cookie = document.getElementById("cookie");
var even = true;
cookie.onclick = function (){
	clickerCounter.textContent++;
	if (even) {
		cookie.width = 100;
		even = false;
	} else {
		cookie.width = 200;
		even = true;
	}
}