window.onload = createDiv;

let square;

const create = document.getElementById('create');

const divContainer = document.getElementById("container");

create.addEventListener('click', createDiv);

function createDiv() {

    divContainer.innerHTML = '';

    const gridDimension = Number(document.getElementById('grid').value);

    console.log(gridDimension);

    if (gridDimension > 0 && gridDimension <= 40) {

        for (let i = 0; i < gridDimension; i++) {

            var row = document.createElement("div");

            row.style.display = "flex";

            for (let j = 0; j < gridDimension; j++) {

                square = document.createElement("div");

                styleSquare(square, gridDimension);

                row.appendChild(square);

            }

            divContainer.append(row);

        }
    } else {

        const errDiv = document.createElement('div');

        errDiv.innerHTML = "Grid Dimension should be a Number between 1 - 40. ";

        errorStyle(errDiv);
        divContainer.append(errDiv);

    }

}


function errorStyle(content) {

    var con = content.style;
    con.fontSize = "25px";
    con.fontWeight = "400";
    con.color = "brown";
    con.textShadow = "1px 1px 2px grey";

}

function styleSquare(square, gridDimension) {

    let hslColor = {
        "degree": Math.random() * 360,
        "saturation": "100%",
        "lightness": 100
    }

    const hslDegree = hslColor.degree;

    const hslFinalColor = "hsl(" + hslDegree + "," + hslColor.saturation + ',' + hslColor.lightness + "%" + ")"

    square.style.backgroundColor = hslFinalColor;

    square.style.border = "1px solid rgb(200,200,200)";

    const defaultSize = 16
    let decidedSize = defaultSize

    if (gridDimension <= 4) decidedSize = defaultSize * 6;
    if (gridDimension > 4 && gridDimension <= 8) decidedSize = defaultSize * 4;
    if (gridDimension > 8 && gridDimension <= 16) decidedSize = defaultSize * 3;
    if (gridDimension > 16 && gridDimension <= 30) decidedSize = defaultSize * 2;

    square.style.width = decidedSize + 'px';

    square.style.height = decidedSize + 'px';

    square.addEventListener("mouseover", () => {

        let hslSqaureLightness = hslColor.lightness - 10;

        hslColor.lightness = hslSqaureLightness;

        var newColor = "hsl(" + hslDegree + "," + hslColor.saturation + ',' + hslSqaureLightness + "%" + ")"

        if (hslSqaureLightness > 0) {
            square.style.backgroundColor = newColor;

            square.style.border = `1px solid ${newColor}`;
        } else {
            square.style.backgroundColor = "black";
            square.style.border = `1px solid rgb(56,56,56)`;
        }
    })

}

