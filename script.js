const container = document.querySelector(".container");

const createGrid = (size) => {
    container.innerHTML = '';
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = '0';

        // Add hover effect
        square.addEventListener('mouseover', () => {
            // Randomize RGB values
            if (!square.style.backgroundColor) {
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                square.style.backgroundColor = randomColor;
            }

            // Increment opacity by 0.1 until fully darkened
            const currentOpacity = parseFloat(square.style.opacity);
            if (currentOpacity < 1) {
                square.style.opacity = (currentOpacity + 0.1).toFixed(1); // Ensure increment precision
            }
        });

        container.appendChild(square);
    }
}

document.getElementById("set-grid").addEventListener('click', () => {
    let gridSize = prompt('Enter the number of quares per side (max 100):');
    gridSize = parseInt(gridSize);

    if (gridSize && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
})

createGrid(16);