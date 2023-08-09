let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let x = Math.ceil(Math.random() * 100);
console.log(x);

function checkGuess() {
    let number = parseInt(userInput.value);
    if (number > x) {
        gameResult.textContent = "Too high ,try again";
        gameResult.style.backgroundColor = "pink";
    } else if (number < x) {
        gameResult.textContent = "Too low ,try again";
        gameResult.style.backgroundColor = "red";
    } else if (number === x) {
        gameResult.textContent = "congratulations you got  it right";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "please provide a valid input";
        gameResult.style.backgroundColor = "violet";
    }
}