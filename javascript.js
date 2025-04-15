const container = document.querySelector(".container");
const origBtn = document.querySelector(".origBtn");
const rndBtn = document.querySelector(".rndBtn");
const opcBtn = document.querySelector(".opcBtn");

for (i=0; i<256; i++) {
    const addBox = document.createElement("div");
    container.appendChild(addBox);
    addBox.addEventListener("mouseover", () => {
        addBox.className = ("hoverOnce");
    })
}

origBtn.addEventListener("click", () => {
    const gridSize = prompt("Please enter gride size between 1 and 100");
    if (gridSize < 1 || gridSize > 100) {
        return "ERROR"
    }else {
    const gridSqrs = gridSize * gridSize;
    boxSize = 960/gridSize;
    console.log(boxSize);
    container.innerHTML = "";
    console.log(gridSqrs);

    for (i=0; i<gridSqrs; i++) {
        const addBox = document.createElement("div");
        container.appendChild(addBox);
        addBox.style.display = "flex";
        addBox.style.flexBasis = `${boxSize}px`;
        addBox.style.height = `${boxSize}px`;
        addBox.style.flexGrow = "0";
        addBox.style.flexShrink = "0";
        addBox.addEventListener("mouseover", () => {
            addBox.className = ("hoverOnce");
        })
    }
}
})

rndBtn.addEventListener("click", () => {
    const gridSize = prompt("Please enter gride size between 1 and 100");
    if (gridSize < 1 || gridSize > 100) {
        return "ERROR"
    }else {
    const gridSqrs = gridSize * gridSize;
    boxSize = 960/gridSize;
    console.log(boxSize);
    container.innerHTML = "";
    console.log(gridSqrs);

    for (i=0; i<gridSqrs; i++) {
        const addBox = document.createElement("div");
        container.appendChild(addBox);
        addBox.style.display = "flex";
        addBox.style.flexBasis = `${boxSize}px`;
        addBox.style.height = `${boxSize}px`;
        addBox.style.flexGrow = "0";
        addBox.style.flexShrink = "0";
        addBox.addEventListener("mouseover", () => {
            const randR = Math.round(Math.random() * 255);
            const randG = Math.round(Math.random() * 255);
            const randB = Math.round(Math.random() * 255);
            const color = "rgb(" + " " + randR + ", " + randG + ", " + randB + ")";
            addBox.style.backgroundColor = `${color}`;
            
        })
    }
}
})

opcBtn.addEventListener("click", () => {
    const gridSize = prompt("Please enter gride size between 1 and 100");
    if (gridSize < 1 || gridSize > 100) {
        return "ERROR"
    }else {
    const gridSqrs = gridSize * gridSize;
    boxSize = 960/gridSize;
    console.log(boxSize);
    container.innerHTML = "";
    console.log(gridSqrs);

    for (i=0; i<gridSqrs; i++) {
        const addBox = document.createElement("div");
        container.appendChild(addBox);
        addBox.style.display = "flex";
        addBox.style.flexBasis = `${boxSize}px`;
        addBox.style.height = `${boxSize}px`;
        addBox.style.flexGrow = "0";
        addBox.style.flexShrink = "0";
    let opcRate = 10;
        addBox.style.opacity = `${opcRate}%`;
        addBox.addEventListener("mouseover", () => {
            addBox.style.backgroundColor = "red";
            opcRate += 10;
            addBox.style.opacity = `${opcRate}%`;
            console.log(addBox.style.opacity);
        })
    }
}
})