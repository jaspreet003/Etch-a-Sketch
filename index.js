let square;

const create = document.getElementById('create');

const divContainer = document.getElementById("container");

create.addEventListener('click', createDiv);

let hslColor = {
    "degree": 0,
    "saturation": "100%",
    "lightness": "100"
}


function createDiv() {

    divContainer.innerHTML = '';

    const noOfRow = document.getElementById('row').value;

    const noOfColumn = document.getElementById('column').value;

    for (let i = 0; i < noOfRow; i++) {

        var row = document.createElement("div");

        row.style.display = "flex";

        for (let j = 0; j < noOfColumn; j++) {

            square = document.createElement("div");

            styleSquare(square);

            row.appendChild(square);

        }

        divContainer.append(row);

    }

}


function styleSquare(square) {

    hslColor.degree = Math.random() * 360;

    const hslDegree = hslColor.degree;

    const hslFinalColor = "hsl(" + hslDegree + "," + hslColor.saturation + ',' + hslColor.lightness + "%" + ")"

    square.style.backgroundColor = hslFinalColor;

    console.log(square.style.backgroundColor = hslFinalColor);

    square.style.border = "1px solid gray";

    square.style.width = '50px';

    square.style.height = '50px';

    square.addEventListener("mouseover", () => {

        let hslSqaureLightness = hslColor.lightness - 10;

        hslColor.lightness = hslSqaureLightness;

        square.style.backgroundColor = "hsl(" + hslDegree + "," + hslColor.saturation + ',' + hslSqaureLightness + "%" + ")";

        console.log(square.style.backgroundColor = "hsl(" + hslDegree + "," + hslColor.saturation + ',' + hslSqaureLightness + "%" + ")");


    })

}

