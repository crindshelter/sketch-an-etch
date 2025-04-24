const gridContainer = document.querySelector(".grid");

let gridSize = 16;

function main() {
    gridSettings()
    gridCreator(gridSize, false);
    colorGrid(true, "black");
}

function gridSettings() {
    const sizeInput = document.querySelector("#size");
    const brushInput = document.querySelector("#brush");
    const color = document.querySelector("#color");
    const submitButton = document.querySelector("#settings-submit");
    const resetButton = document.querySelector("#reset-button");

    submitButton.onclick = ()=> {
        const newSize = sizeInput.value;

        if (gridSize !== newSize) {
            gridSize = newSize;
            gridCreator(gridSize, true);
        }

        colorGrid(brushInput.checked, color.value);
    }

    resetButton.onclick = ()=> {
        gridCreator(gridSize, true);
        colorGrid(brushInput.checked, color.value);
    }
}

function gridCreator(size, redo){
    if (redo) {
        const element = document.querySelectorAll(".row");
        for (let i = 0; i < element.length; i++) {
            element[i].remove()
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

}

function colorGrid(mode, color){
    let gridBox = document.querySelectorAll(".grid-box");
    let isMouseDown = false;
    let brush = mode;

    
    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].addEventListener("mousedown", ()=> {
            isMouseDown = true;
            if (brush) {
                gridBox[i].style.backgroundColor = color;
            } else {
                gridBox[i].classList.remove("color-square");
            }
        })
        gridBox[i].addEventListener("mouseup", ()=> {
            isMouseDown = false;
        })
        gridBox[i].addEventListener("mousemove", ()=> {
            if (isMouseDown) {
                if (brush) {
                    gridBox[i].style.backgroundColor = color;
                } else {
                    gridBox[i].classList.remove("color-square");
                }
            }
        })
        
    }
}

main()

