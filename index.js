document.body.onload = createDiv;



function createDiv(row, column) {
    console.log("jajajs");

    for (let i = 0; i <= 16; i++) {

        let square;

        var row = document.createElement("div");

        row.style.display = "flex";

        for (let j = 0; j <= 16; j++) {

            square = document.createElement("div");

            styleSquare(square);

            row.appendChild(square);

        }

        const divContainer = document.getElementById("container");

        divContainer.append(row);

    }

}

function styleSquare(square) {

    square.style.backgroundColor = 'pink';

    square.style.border = '1px solid black'

    square.style.width = '50px';
    
    square.style.height = '50px';

}