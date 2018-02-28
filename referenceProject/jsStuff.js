var looper;

var degrees = 0;

function rotateAnimation(element, speed) {
	var elem = document.getElementById(element);
	elem.style.transform = "rotate("+degrees+"deg)";
	looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}