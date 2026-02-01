let mainContainer = document.querySelector("#container");

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