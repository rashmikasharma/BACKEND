let box = document.querySelector(".box");
let genbtn = document.querySelector(".btn");
let stopbtn = document.querySelector(".stop-btn");

let colors = ["red", "black", "blue", "green", "orange", "brown", "yellow", "purple", "pink", "gray"];

let intervalId;

function randomcolor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];  
}

genbtn.addEventListener("click", function () {
    clearInterval(intervalId); // avoid multiple intervals
    intervalId = setInterval(() => {
        box.style.backgroundColor = randomcolor();
    }, 500);
});

stopbtn.addEventListener("click", function () {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
