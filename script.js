document.addEventListener('DOMContentLoaded', () => {
    // Get the game box element
    const gameBox = document.getElementById('game-box');

    // Add an event listener for mouse movement within the game box
    gameBox.addEventListener('mousemove', (event) => {
        // Get the dimensions of the game box
        const boxWidth = gameBox.offsetWidth;
        const boxHeight = gameBox.offsetHeight;
        
        // Get the mouse position relative to the game box
        const mouseX = event.offsetX;
        const mouseY = event.offsetY;

        // Calculate red intensity based on horizontal mouse position
        const redIntensity = Math.floor((mouseX / boxWidth) * 255);
        
        // Calculate blue intensity based on vertical mouse position
        const blueIntensity = Math.floor((mouseY / boxHeight) * 255);

        // Set the background color of the game box
        gameBox.style.backgroundColor = `rgb(${redIntensity}, 0, ${blueIntensity})`;
    });

    // Add an event listener for when the mouse leaves the game box
    gameBox.addEventListener('mouseleave', () => {
        // Reset the background color to white
        gameBox.style.backgroundColor = 'white';
    });
});