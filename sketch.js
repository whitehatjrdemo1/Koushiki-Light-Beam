var gameState = 0;
var canvas;


function preload() {

}

function setup() {
	canvas = createCanvas(600, 600);
	player = new Player(100, 580);


}


function draw() {
	background(0);
	if (gameState == 0) {

	}
	if (gameState == 1) {

	}
	//keyPressed();
	player.display();

	
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		player.y -= 10;
		player.canvaspoint = {
			x: player.x,
			y: 0
		}



	}
	if (keyCode === DOWN_ARROW) {
		player.y += 10;
		player.canvaspoint = {
			x: player.x,
			y: canvas.height
		}
		
	}
	if (keyCode === LEFT_ARROW) {
		player.x -= 10;
		player.canvaspoint = {
			x: 0,
			y: player.y
		}
		
		
	}

if (keyCode === RIGHT_ARROW) {
	player.x += 10;
	player.canvaspoint = {
		x: canvas.width,
		y: player.y
	}
}
}
function mouseDragged(){
	player.canvaspoint={x:mouseX,y: mouseY}
	// player.canvaspoint=lineExtension(player.canvaspoint.x,player.canvaspoint.y,mouseX,mouseY);
	//console.log(player.canvaspoint)
	


}