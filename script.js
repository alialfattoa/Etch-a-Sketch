let mainContainer = document.querySelector("#container");
// New Grid button
let newGridButton = document.querySelector("#new-grid-btn");
newGridButton.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Enter the number of squares: (100 max)"));
    if (gridSize > 100) {
        alert("Error: 100 squares max")
    }
    else {
        mainContainer.innerHTML = ""; // innerHTML is secure when used for emptying 
        createGrid(gridSize);   
    }
})

// Create grid function
function createGrid (squares) {
    let squareSize = 960 / squares;
    for (let i = 0; i < squares*squares; i++) {
        let newSquare = document.createElement("div");
        newSquare.style.width = squareSize+"px";
        newSquare.style.height = squareSize+"px";
        newSquare.style.border = "1pt solid black";
        newSquare.style.boxSizing = "border-box";
        newSquare.addEventListener("mouseenter", () => {
            newSquare.style.backgroundColor = "black";
        });
        mainContainer.appendChild(newSquare);
    }
}

createGrid(16);