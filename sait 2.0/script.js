var i = 0;
var images = [];
//время перехода
var time = 1500;
images[0] = "img/m.jpg";
images[1] = "img/m2.jpeg";
images[2] = "img/m3.jpg";
images[3] = "img/m4.jpg";

function slideShow() {
	document.slideshow.src = images[i];
	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	//установка времени
	setTimeout("slideShow()", time)
}

window.onload = slideShow;