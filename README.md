# 🧩 Sudoku Game (JavaScript)

A fully interactive **Sudoku puzzle game** built using **HTML, CSS, and JavaScript**.  
This project generates a random playable Sudoku board, allows number input via a number panel, and validates user moves in real time.



🔗 **Live CodePen:**  
https://codepen.io/editor/qonspdqk-the-typescripter/pen/019d3ecc-e4eb-718b-b16b-ab0ede5cab30


---

## ✨ Features

- ✅ Generates a valid Sudoku puzzle automatically
- ✅ Interactive 9×9 grid layout
- ✅ Click-to-select empty cells
- ✅ Number input using a 1–9 number pad
- ✅ Locked original puzzle numbers
- ✅ Invalid moves highlighted in red
- ✅ Responsive grid styling
- ✅ Backtracking algorithm-based puzzle generation


---

## 🛠️ Technologies Used

- **HTML** → structure of the Sudoku board
- **CSS** → layout, styling, highlighting, grid formatting
- **JavaScript** → puzzle generation, validation, interaction logic


---

## ⚙️ How It Works

The game follows this logic:

Create empty board ↓ Solve board using backtracking ↓ Remove random numbers ↓ Display playable puzzle ↓ User selects empty cells ↓ User inserts numbers via number pad ↓ Moves validated instantly

The Sudoku generator ensures:

- No duplicate numbers in any row
- No duplicate numbers in any column
- No duplicate numbers in any 3×3 box


---

## 🎮 How to Play

1. Click any **empty cell**
2. Select a number from the **number row below**
3. If the number is correct → it stays normal
4. If incorrect → it turns red
5. Complete the grid following Sudoku rules


---

## 📁 Project Structure

index.html style.css script.js

- **index.html** → grid container + number pad
- **style.css** → Sudoku board styling
- **script.js** → generator, validation, interaction logic


---

## 🧠 Core Algorithm

This project uses a **backtracking algorithm** to generate valid Sudoku boards:

Find empty cell Try numbers 1–9 randomly Check validity Place number if valid Repeat Backtrack if stuck

Then random cells are removed to create the playable puzzle.


---

## 🚀 Future Improvements (Planned)

Possible upgrades:

- Win detection system 🎉
- Difficulty selection (Easy / Medium / Hard)
- Timer feature ⏱️
- Mistake counter ❌
- Hint button 💡
- Mobile optimization 📱


---

## 👨‍💻 Author

Created by **The Typescripter**  
Built as a learning project to explore **grid logic, DOM interaction, and algorithmic puzzle generation in JavaScript**.
