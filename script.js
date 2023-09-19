let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let title = document.querySelector("h1");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

image1.setAttribute("src", `./images/dice${randomNumber1}.png`);

image2.setAttribute("src", `./images/dice${randomNumber2}.png`);

if (randomNumber1 == randomNumber2) {
  title.innerHTML = "🚩Match Draw🚩";
} else if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins 🚩";
} else {
  title.innerHTML = "Player 2 Wins 🚩";
}
