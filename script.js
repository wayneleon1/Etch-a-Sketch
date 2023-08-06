const container = document.querySelector('.container');
let gridSize = 16;

function createGrid(size) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });
    container.appendChild(square);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetGrid() {
  let newSize = prompt('Enter the number of squares per side (max 100):');
  newSize = parseInt(newSize);
  if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert('Invalid input. Please enter a number between 1 and 100.');
  }
}

function clearGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.backgroundColor = '#FFF';
  });
}

createGrid(gridSize);

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', () => {
  clearGrid();
});

document.body.insertBefore(resetButton, container);
