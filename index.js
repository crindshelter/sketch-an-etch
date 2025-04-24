const gridContainer = document.querySelector(".grid");

let gridSize = 16;

function main() {
    gridSettings();
    gridCreator(gridSize, false);
    colorGrid();
}

function gridSettings() {
    const sizeInput = document.querySelector("#size");
    const brushInput = document.querySelector("#brush");
    const color = document.querySelector("#color");
    const resetButton = document.querySelector("#reset-button");

    sizeInput.addEventListener("input", () => {
        const newSize = parseInt(sizeInput.value);
        if (gridSize !== newSize) {
            gridSize = newSize;
            gridCreator(gridSize, true);
        }
    });

    resetButton.onclick = ()=> {
        gridCreator(gridSize, true);
        colorGrid(brushInput.checked, color.value);
    }
}

function gridCreator(size, redo){
    if (redo) {
        const element = document.querySelectorAll(".row");
        for (let i = 0; i < element.length; i++) {
            element[i].remove();
        }
    }

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("grid-box");
            row.appendChild(box);

            let height = 400 / parseInt(size);
            row.style.height = height;
        }
    }

    colorGrid();
}

function colorGrid() {
    const brushInput = document.querySelector("#brush");
    const colorInput = document.querySelector("#color");
    let gridBox = document.querySelectorAll(".grid-box");
    let isMouseDown = false;

    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].addEventListener("mousedown", ()=> {
            isMouseDown = true;
            if (brushInput.checked) {
                gridBox[i].style.backgroundColor = colorInput.value;
            } else {
                gridBox[i].style.backgroundColor = "";
            }
        });

        gridBox[i].addEventListener("mouseup", ()=> {
            isMouseDown = false;
        });

        gridBox[i].addEventListener("mousemove", ()=> {
            if (isMouseDown) {
                if (brushInput.checked) {
                    gridBox[i].style.backgroundColor = colorInput.value;
                } else {
                    gridBox[i].style.backgroundColor = "";
                }
            }
        });
    }
}

main()

