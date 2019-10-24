"use strict";
let sliderItem = Array.from(document.querySelectorAll(".slider__item"));
console.log(sliderItem);
let prev = document.getElementsByClassName("slider__arrow_prev");
let next = document.getElementsByClassName("slider__arrow_next");
console.log(next);
let arrowNext = next[0];
let number = 0;
let slider = sliderItem[number];
let arrowPrev = prev[0];


arrowNext.onclick = function () {
  if (number >=0 && number < sliderItem.length -1) {
	number++;
	slider = sliderItem[number - 1];
	slider.classList.remove('slider__item_active');
	slider = sliderItem[number];
	slider.classList.add('slider__item_active');
  } else {
	number = 0;
	slider = sliderItem[number];
	slider.classList.add('slider__item_active');
	for (let i = 1; i <  5; i++) {
		 slider = sliderItem[number + i];
		 slider.classList.remove('slider__item_active');
	}
  }
}

arrowPrev.onclick = function () {
	if (number > 0 && number < 5) {
		number--;
		slider = sliderItem[number + 1];
		slider.classList.remove('slider__item_active');
		slider = sliderItem[number];
		slider.classList.add('slider__item_active');
	} else {
		number = sliderItem.length - 1;
		slider = sliderItem[0];
		slider.classList.remove('slider__item_active');
		slider = sliderItem[number];
		slider.classList.add('slider__item_active');
	}
}
