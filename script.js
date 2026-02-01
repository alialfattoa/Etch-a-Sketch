let mainContainer = document.querySelector("container");


function createGrid (squares) {
    for (let i = 0; i < squares*squares; i++) {
        let squareSize = 960 / squares;
        let newSquare = document.createElement("div");
        newSquare.width = squareSize;
        newSquare.height = squareSize;
        newSquare.border = "1pt solid black"
        newSquare.addEventListener("mouseenter", () => {
            newSquare.backgroundColor = "black";
        })
    }
}

