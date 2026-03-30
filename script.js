const sudoku = document.querySelector(".sudoku-game");
const numberButtons = document.querySelectorAll(".num");

let selectedCell = null;

// Create empty board
let board = Array.from({ length: 9 }, () => Array(9).fill(0));

// Store original puzzle cells
let fixedCells = Array.from({ length: 9 }, () => Array(9).fill(false));


// Shuffle numbers 1–9
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}


// Check if number placement is valid
function isValid(board, row, col, num) {

  // Check row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
  }

  // Check column
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) return false;
  }

  // Check 3×3 box
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}


// Backtracking solver
function solve(board) {

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {

      if (board[row][col] === 0) {

        let numbers = shuffle([1,2,3,4,5,6,7,8,9]);

        for (let num of numbers) {

          if (isValid(board, row, col, num)) {

            board[row][col] = num;

            if (solve(board)) return true;

            board[row][col] = 0;
          }
        }

        return false;
      }
    }
  }

  return true;
}


// Remove numbers to create puzzle
function removeCells(count) {

  while (count > 0) {

    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);

    if (board[row][col] !== 0) {

      board[row][col] = 0;
      count--;
    }
  }
}


// Mark original puzzle cells
function markFixedCells() {

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {

      if (board[row][col] !== 0) {
        fixedCells[row][col] = true;
      }

    }
  }
}


// Render Sudoku board
function renderBoard() {

  sudoku.innerHTML = "";

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {

      let cell = document.createElement("div");
      cell.classList.add("block");

      if (board[row][col] !== 0) {
        cell.textContent = board[row][col];
      }

      if (fixedCells[row][col]) {
        cell.classList.add("fixed");
      }

      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.addEventListener("click", () => selectCell(cell));

      sudoku.appendChild(cell);
    }
  }
}


// Select a cell
function selectCell(cell) {

  if (cell.classList.contains("fixed")) return;

  document.querySelectorAll(".block").forEach(c =>
    c.classList.remove("selected")
  );

  cell.classList.add("selected");

  selectedCell = cell;
}


// Handle number button clicks
numberButtons.forEach(button => {

  button.addEventListener("click", () => {

    if (!selectedCell) return;

    let number = Number(button.textContent);

    let row = selectedCell.dataset.row;
    let col = selectedCell.dataset.col;

    if (isValid(board, row, col, number)) {

      board[row][col] = number;
      selectedCell.textContent = number;
      selectedCell.classList.remove("error");

    } else {

      selectedCell.textContent = number;
      selectedCell.classList.add("error");
    }

  });

});


// Generate Sudoku puzzle
function generateSudoku() {

  solve(board);        // Step 1: create full solution

  removeCells(45);     // Step 2: remove numbers

  markFixedCells();    // Step 3: mark remaining numbers as fixed

  renderBoard();       // Step 4: render grid
}


// Start game
generateSudoku();