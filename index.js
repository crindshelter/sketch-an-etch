const gridContainer = document.querySelector(".grid");

let gridSize = 52;

function gridCreator(size){
    
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

function colorGrid(mode){
    let gridBox = document.querySelectorAll(".grid-box");
    let isMouseDown = false;
    let brush = mode;
    
    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].addEventListener("mousedown", ()=> {
            isMouseDown = true;
            if (brush) {
                gridBox[i].classList.add("red-square");
            } else {
                gridBox[i].classList.remove("red-square");
            }
        })
        gridBox[i].addEventListener("mouseup", ()=> {
            isMouseDown = false;
        })
        gridBox[i].addEventListener("mousemove", ()=> {
            if (isMouseDown) {
                if (brush) {
                    gridBox[i].classList.add("red-square");
                } else {
                    gridBox[i].classList.remove("red-square");
                }
            }
        })
        
    }
}

gridCreator(gridSize);
colorGrid(true);