// Transcrypt'ed from Python, 2022-07-26 21:59:46
var __name__ = '__main__';
 var preload = function () {
	// pass;
};
 var setup = function () {
	var canvas = createCanvas (640, 480);
	canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
};
 var draw = function () {
	var initialWidth = 200;
	var initialHeight = 15;
	var diameter = 30;
	var x = 0;
	image(video,95,95,200,200);
	for (var i = 0; i < 2; i++) {
		var c = color(0,255,0);
		fill(c);
		rect (90, 90, initialHeight, initialWidth);
		rect (90 + initialWidth, 90, initialHeight, initialWidth);
	}
	for (var i = 0; i < 2; i++) {
		rect (100, 90 + x, initialWidth, initialHeight);
		var c = color(255,0,0);
		fill(c);
		circle (100, 100 + x, 30);
		circle (100 + initialWidth, 100 + x, 30);
		var x = 200;
		var c = color(0,255,0);
		fill(c);
	}
	
};

var take_snapshot = () => {
		save('student_name.png');
};

//# sourceMappingURL=main.map