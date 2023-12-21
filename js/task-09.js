function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Write a script that changes the background colors of the <body> element via inline style when clicking on button.change-color and outputs the color value to span.color.

const btnColor = document.querySelector(".change-color");
const nameColor = document.querySelector("span.color");

btnColor.addEventListener("click", onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
}
