const grid = document.querySelector('.grid')
const b16 = document.querySelector('#b16')
const b32 = document.querySelector('#b32')
const b64 = document.querySelector('#b64')
const clearButton = document.querySelector('#clearButton')

const size = 16

let currentSize = 16

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      grid.appendChild(gridElement)
    }
  }

function changeColor(ev) {
  if (mouseDown) {
    ev.target.style.backgroundColor = 'black'
  }
}

function clearGrid() {
  grid.innerHTML = ''
  setupGrid(currentSize)
}

b16.addEventListener('click', () => {
  currentSize = 16
  clearGrid()
})
b32.addEventListener('click', () => {
  currentSize = 32
  clearGrid()
})
b64.addEventListener('click', () => {
  currentSize = 64
  clearGrid()
})

clearButton.addEventListener('click', clearGrid)

window.onload = () => setupGrid(16)