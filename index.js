const create = document.getElementById('create');

const divContainer = document.getElementById("container");

create.addEventListener('click', createDiv);

function createDiv() {

    divContainer.innerHTML = '';

    const noOfRow = document.getElementById('row').value;

    const noOfColumn = document.getElementById('column').value;

    for (let i = 1; i <= noOfRow; i++) {

        let square;

        var row = document.createElement("div");

        row.style.display = "flex";

        for (let j = 1; j <= noOfColumn; j++) {

            square = document.createElement("div");

            styleSquare(square);

            row.appendChild(square);

        }
        
        divContainer.append(row);

    }

}

function styleSquare(square) {

    square.style.backgroundColor = getRandomColor();

    square.style.width = '50px';

    square.style.height = '50px';

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}