const body = document.querySelector("body");
const GRID_HEIGHT = 500;
const GRID_WIDTH = 500;
const squaresPerColumn = 16;
const squareLength = Math.floor(GRID_HEIGHT / squaresPerColumn);

// Will fill 16 columns with 16 squares each , as divs stack on top
function initGrid() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  body.appendChild(gridContainer);
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
    gridContainer.appendChild(columnContainer);
  }
}

function paintSquare() {
  this.style.background = "black";
}

function initMenu() {
  const clearBtn = document.createElement("div");
  clearBtn.classList.add("clear-btn");
  clearBtn.textContent = "Clear";
  clearBtn.addEventListener("click", clearGrid);
  body.appendChild(clearBtn);
}

function clearGrid() {
  const gridContainer = document.querySelector("div.grid-container");
  gridContainer.remove();
  initGrid();
}

initMenu();
initGrid();
