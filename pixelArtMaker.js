let gridWidth = 1;
let gridHeight = 1;
let color = "black";

const canvas = document.querySelector("#canvas");

function makeGrid(e) {
	gridWidth = Number(document.querySelector(".size input[name='width']").value);
	gridHeight = Number(document.querySelector(".size input[name='height']").value);

	for (let i = gridHeight; i > 0; i--) {
		const col = document.createElement('tr');
		for (let i = gridWidth; i > 0; i--) {
			const row = document.createElement('td');
			col.appendChild(row);
		}
		canvas.appendChild(col);
	}

	// stop grid from disappearing after function is called
	e.preventDefault();
}

const makeGridButton = document.querySelector("#submit-size");
makeGridButton.addEventListener('click', makeGrid);

function draw(e) {
	color = document.querySelector(".color-picker input[name='pick-color']").value;
	e.target.style.backgroundColor = color;
}

canvas.addEventListener('click', draw);