// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	if (keyPressed == "67") {
		console.log("C");
	}
	if (keyPressed == "65") {
		console.log("A");
	}
	if (keyPressed == "66") {
		console.log("B");
	}
	if (keyPressed == "68") {
		console.log("D");
	}
	if (keyPressed == "69") {
		console.log("E");
	}
	if (keyPressed == "70") {
		console.log("F");
	}
	if (keyPressed == "71") {
		console.log("G");
	}
	if (keyPressed == "72") {
		console.log("H");
	}
	if (keyPressed == "73") {
		console.log("I");
	}
	if (keyPressed == "74") {
		console.log("J");
	}
	if (keyPressed == "75") {
		console.log("K");
	}
	if (keyPressed == "76") {
		console.log("L");
	}
	if (keyPressed == "77") {
		console.log("M");
	}
	if (keyPressed == "78") {
		console.log("N");
	}
	if (keyPressed == "79") {
		console.log("O");
	}
	if (keyPressed == "80") {
		console.log("P");
	}
	if (keyPressed == "81") {
		console.log("Q");
	}
	if (keyPressed == "82") {
		console.log("R");
	}
	if (keyPressed == "83") {
		console.log("S");
	}
	if (keyPressed == "84") {
		console.log("T");
	}
	if (keyPressed == "85") {
		console.log("U");
	}
	if (keyPressed == "86") {
		console.log("V");
	}
	if (keyPressed == "87") {
		console.log("W");
	}
	if (keyPressed == "88") {
		console.log("X");
	}
	if (keyPressed == "89") {
		console.log("Y");
	}
	if (keyPressed == "90") {
		console.log("Z");
	}
}
