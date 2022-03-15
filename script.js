const body = document.querySelector("body");
const GRID_HEIGHT = 500;
const GRID_WIDTH = 500;

// Will fill 16 columns with 16 squares each , as divs stack on top
function initGrid(squaresPerSide) {
  let squareLength = Math.floor(GRID_HEIGHT / squaresPerSide);
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  body.appendChild(gridContainer);
  for (let i = 0; i < squaresPerSide; i++) {
    const columnContainer = document.createElement("div");
    columnContainer.classList.add("column");
    columnContainer.style.width = `${squareLength}px`;
    for (let j = 0; j < squaresPerSide; j++) {
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
  const slider = document.createElement("input");

  slider.type = "range";
  slider.min = 1;
  slider.max = 100;
  slider.value = 16;
  slider.classList.add("slider");
  const sliderValueMessage = document.createElement("div");
  sliderValueMessage.textContent = `${slider.value} x ${slider.value}`;
  slider.addEventListener("input", () => {
    squaresPerSide = slider.value;
    sliderValueMessage.textContent = `${slider.value} x ${slider.value}`;
    clearGrid(squaresPerSide);
  });

  clearBtn.classList.add("clear-btn");
  clearBtn.textContent = "Clear";
  clearBtn.addEventListener("click", () => {
    clearGrid(slider.value);
  });

  body.appendChild(clearBtn);
  body.appendChild(slider);
  body.appendChild(sliderValueMessage);
}

function clearGrid(squaresPerSide) {
  const gridContainer = document.querySelector("div.grid-container");
  gridContainer.remove();
  initGrid(squaresPerSide);
}

initMenu();
initGrid(100);
