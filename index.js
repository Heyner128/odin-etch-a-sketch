

function drawBoard(size, b) {
    removeSquares(b);
    b.style.setProperty('--grid-size', size);
    for(let i = 0; i <size;i++) {
        for(let j = 0; j <size; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "square";
            newDiv.addEventListener("mouseover",e=>newDiv.style.backgroundColor="black");
            newDiv.id = "square " + (i+1) + " - " + (j+1);
            b.appendChild(newDiv);
        }
    }
}

function removeSquares(b) {
    
    while(b.hasChildNodes()) {
        b.removeChild(b.lastChild);
    }
}

function cleanBoard(b) {
    if(b.hasChildNodes()) b.childNodes.forEach(event=>event.style.backgroundColor="white");
}

function initBoard(b) {
    let size = window.prompt('size of the grid');
    while(!Number(size)||size>100){
        window.alert("not valid!");
        size = window.prompt('size of the grid');
    };
    drawBoard(size, b);
}



const board = document.querySelector("#board");
const button = document.querySelector("#drawBoard");
const clean = document.querySelector("#reset");

window.onload = function () {
    initBoard(board);
}


button.addEventListener("click", e=>initBoard(board));
clean.addEventListener("click", e=>cleanBoard(board));





