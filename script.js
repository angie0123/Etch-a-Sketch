const body = document.querySelector("body");
const GRID_HEIGHT = 500;
const GRID_WIDTH = 500;
const squaresPerColumn = 16;
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
const squareLength = Math.floor(GRID_HEIGHT / squaresPerColumn);
body.appendChild(gridContainer);
//1. create 16 * 16 square divs

// Will fill 16 columns with 16 squares each , as divs stack on top

for (let i = 0; i < 16; i++) {
  const columnContainer = document.createElement("div");
  columnContainer.classList.add("column");
  columnContainer.style.width = `${squareLength}px`;
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.height = `${squareLength}px`;
    square.addEventListener("mouseover", paintSquare);
    columnContainer.appendChild(square);
  }

  //   columnContainer.style.width = unitHeight;
  gridContainer.appendChild(columnContainer);
}

function paintSquare() {
  this.style.background = "black";
}
