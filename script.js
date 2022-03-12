const body = document.querySelector("body");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
body.appendChild(gridContainer);
//1. create 16 * 16 square divs

// Will fill 16 columns with 16 squares each , as divs stack on top

for (let i = 0; i < 16; i++) {
  const columnContainer = document.createElement("div");
  columnContainer.classList.add("column");
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    columnContainer.appendChild(square);
  }
  gridContainer.appendChild(columnContainer);
}
