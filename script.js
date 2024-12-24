let buttonContainer = document.getElementById('buttonContainer');
let container = document.getElementById('container');
let parentContainer = document.getElementById('parentContainer');
parentContainer.append(buttonContainer, container);

promptButton = document.createElement("button");
promptButton.textContent = "Start";
buttonContainer.appendChild(promptButton);



function divGrid() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('myClass');
        container.appendChild(newDiv);
        newDiv.style.color = "black";
        newDiv.style.border = "1px solid black";
        newDiv.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#D32F2F";
        })
};

for (let i = 0; i <= 255; i ++)
{
    divGrid();
}

buttonContainer.addEventListener("click", function () {
    let userInput = prompt("How many squares would you like per side?");
    userInput = Number(userInput);
    
    if (userInput > 100 || isNaN(userInput) || userInput === 0) {
        alert("Please input a number less than or equal to 100");
        return;
    }
    
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.innerHTML = "";
    let squareSize = 960 / userInput;
    
    for (let i = 0; i < userInput * userInput; i++) {
        divGrid();
    }
});