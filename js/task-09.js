//* Write a script to change the background color of the <body> element using an online style
//* click button.change-color and display the color values ​​in span.color.
//* To generate a random color, use the getRandomHexColor function.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector(".color").textContent = color;
}

const button = document.querySelector(".change-color");
button.addEventListener("click", changeBackgroundColor);

//? for exapmle

// <button id='button'>Поменять фон</button>

// <script>
// const button = document.getElementById('button');
// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

// function changeBackground(){
// 	document.body.style.background = rainbow[Math.floor(7 * Math.random())];
// }

// button.addEventListener('click', changeBackground);
// </script>
