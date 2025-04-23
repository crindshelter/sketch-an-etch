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

function colorGrid(){
    let gridBox = document.querySelectorAll(".grid-box");
    
    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].addEventListener("mouseover", ()=> {
            gridBox[i].classList.add("red-square");
        })
    }
}

gridCreator(gridSize);
colorGrid();