const grid = document.querySelector(".grid")
const b16 = document.querySelector("#b16")
const b32 = document.querySelector("#b32")
const b64 = document.querySelector("#b64")
const clearButton = document.querySelector("#clearButton")
const eraserButton = document.querySelector("#eraserButton");
const drawButton = document.querySelector("#drawButton");
const rainbowButton = document.querySelector("#rainbowButton");

let isDrawingMode = true
let isRainbowMode = false;

rainbowButton.addEventListener("click", () => {
  isRainbowMode = true;
  rainbowButton.classList.add("selected")
  eraserButton.classList.remove("selected")
  drawButton.classList.remove("selected")
});

drawButton.addEventListener("click", () => {
  isDrawingMode = true
  isRainbowMode = false
  drawButton.classList.add("selected")
  eraserButton.classList.remove("selected")
  rainbowButton.classList.remove("selected")
})

eraserButton.addEventListener("click", () => {
  isDrawingMode = false
  isRainbowMode = false
  eraserButton.classList.add("selected")
  drawButton.classList.remove("selected")
  rainbowButton.classList.remove("selected")
});

const size = 16

let currentSize = 16

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div")
    gridElement.classList.add("grid-element")
    gridElement.addEventListener("mouseover", changeColor)
    grid.appendChild(gridElement)
  }
}

const rainbowColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
let currentColorIndex = 0;

function changeColor(ev) {
  if (mouseDown) {
    if (isDrawingMode) {
      if (isRainbowMode) {
        ev.target.style.backgroundColor = rainbowColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;
      } else {
        ev.target.style.backgroundColor = "black"; // Default drawing color
      }
    } else {
      ev.target.style.backgroundColor = ""; // Erase (set to transparent)
    }
  }
}

function clearGrid() {
  grid.innerHTML = ""
  setupGrid(currentSize)
}

b16.addEventListener("click", () => {
  currentSize = 16
  clearGrid()
})
b32.addEventListener("click", () => {
  currentSize = 32
  clearGrid()
})
b64.addEventListener("click", () => {
  currentSize = 64
  clearGrid()
})

clearButton.addEventListener("click", clearGrid)

window.onload = () => setupGrid(16)
