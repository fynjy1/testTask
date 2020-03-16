var rowsNumber1 = 10;
var columnsNumber1 = 10;

const fieldSize = 10;
const rowsNumber = rowsNumber1;
const columnsNumber = columnsNumber1;
const backgroundColor = '#0C0C0C';
const fieldColor = '#F8E34B';
const generationTime = 100;

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const lifeGame = new LifeGame(rowsNumber, columnsNumber);

start();

function start () {
	canvas.width = fieldSize * columnsNumber;
	canvas.height = fieldSize * rowsNumber;

	lifeGame.reviveRandomFields(rowsNumber * columnsNumber / 2)

	requestAnimationFrame(tickRate)
}

function tickRate (timestamp) {
	clearCanvas()
	if (timestamp > lifeGame.generationNumber * generationTime) {
		lifeGame.changeGeneration();
	}

	lifeGame.forEachEmpty((x, y) => drawField(x, y, fieldColor));

	requestAnimationFrame(tickRate);
}

function clearCanvas () {
    context.fillStyle = backgroundColor;
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fill();
}

function drawField (x, y, color) {
    context.fillStyle = color;
    context.beginPath();
    context.rect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
    context.fill();
}