"use strict";
let link = document.getElementsByClassName('menu__link');

let menuSub = Array.from(document.querySelectorAll('.menu_sub'));
console.log(menuSub);
for (let i = 0; i < menuSub.length; i++) {
	let  menu = menuSub[i];
	menu.parentElement.querySelector(".menu__link").onclick = function () {
		if (menuSub[i].classList.contains("menu_active")) {
			menuSub[i].classList.remove("menu_active");
			return false;
		} else {
			menuSub[i].classList.add("menu_active");
		}
		if (menuSub.length == 1) {
			menuSub[i].classList.remove('menu_active');

		}
	}
}