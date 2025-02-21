// Get references to the buttons
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');

// Event listener for the Red button
redButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

// Event listener for the Blue button
blueButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});
