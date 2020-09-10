var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

console.log(color1.value);
console.log(color2.value);

function setGradient() {
    document.body.style.background = "linear-gradient(to right, "
         + color1.value
         +", "
         + color2.value
         + ") ";
}

function reset() {
    document.body.style.background = "";
}
