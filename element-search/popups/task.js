"use strict";
let element = document.getElementById("modal_main");
element.classList.add("modal_active");
let closeBtn = document.getElementsByClassName("modal__close");
//console.log(closeBtn);
let closeFirst = closeBtn[0];

let modal = document.getElementsByClassName("modal");
	closeFirst.onclick = function () {
		element.style.display = 'none';

	} 

let success = document.getElementsByClassName("show-success");
//console.log(success);
let showSuccess = success[0];
showSuccess.onclick = function () {
	document.getElementById("modal_success").classList.add("modal_active");
}

let closeSecond = closeBtn[2];
let modalSuccess = document.getElementById("modal_success");
closeSecond.onclick = function () {
	modalSuccess.style.display = 'none';
}