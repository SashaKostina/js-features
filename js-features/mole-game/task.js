"use strict";
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
for (let i = 1; i < 10; i++) {
	let hole = document.getElementById(`hole${i}`);
  hole.onclick = function () {
	
	if (hole.className.includes("hole_has-mole") == true) {
		dead.textContent++;
	} else {
		lost.textContent++;
	}
  
	if (dead.textContent == 10) {
	alert("Winner!");
	dead.textContent = 0;
	lost.textComtent = 0;
	}

	if (lost.textContent == 5) {
	alert("Losing!");
	dead.textContent = 0;
	lost.textContent = 0;
	}
  }
}
