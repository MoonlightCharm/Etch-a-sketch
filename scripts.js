let container = document.createElement("div");
container.className = "wrapper";
document.body.appendChild(container);

for (let i = 0; i < 256; i += 1) {

    let div = document.createElement("div");
    div.className = "square";
    div.style.borderStyle = "solid";
    div.style.margin = "10px"
    div.style.padding = "30px"
    container.appendChild(div);


}

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(16, 1fr";

container.addEventListener('mouseover', (e) => {
    if (e.target.matches('.square')) {
        e.target.classList.add('permahover');
    }
});

const btn = document.querySelector(".btn");

btn.addEventListener('click', () => {
    let numOfPixels = prompt("Please enter how many pixels you would like to see the grid to be made of:");
    container.replaceChildren();
    for (let i = 0; i < (numOfPixels * numOfPixels); i++) {
        let div = document.createElement("div");
        div.className = "square";
        div.style.borderStyle = "solid";
        div.style.margin = "10px"
        div.style.padding = "30px"
        container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${numOfPixels}, 1fr)`;
});