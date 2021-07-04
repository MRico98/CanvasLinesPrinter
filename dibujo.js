let actualXPosition = 0;
let actualYPosition = 0;
let canvasElement = document.getElementById("dibujito");
let lienzo = canvasElement.getContext("2d");

document.addEventListener('keydown',function(e){
	let newPosition;
	switch(e.key){
		case "ArrowLeft":
			if(actualXPosition <= 0) break;
			newPosition = actualXPosition - 10;
			dibujarLinea(newPosition,actualYPosition);
			actualXPosition = newPosition;
			break;
		case "ArrowRight":
			if(actualXPosition >= canvasElement.width) break;
			newPosition = actualXPosition + 10;
			dibujarLinea(newPosition,actualYPosition);
			actualXPosition = newPosition;
			break;
		case "ArrowDown":
			if(actualYPosition >= canvasElement.height) break;
			newPosition = actualYPosition + 10;
			dibujarLinea(actualXPosition,newPosition);
			actualYPosition = newPosition;
			break;
		case "ArrowUp":
			if(actualYPosition <= 0) break;
			newPosition = actualYPosition - 10;
			dibujarLinea(actualXPosition,newPosition);
			actualYPosition = newPosition;
			break;
	}
	
	
})

function dibujarLinea(xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = 'red';
	lienzo.moveTo(actualXPosition,actualYPosition);
	lienzo.lineTo(xfinal,yfinal);
	lienzo.stroke();
	lienzo.closePath();
}