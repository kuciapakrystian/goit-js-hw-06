// Write a script to create and clear a collection of elements. The user enters the number of elements into input and clicks the New button, after which a collection is rendered. When you click on the Clear button, the collection is cleared.

// Create a createBoxes(amount) function that takes one parameter, a number. The function creates as many <div> as specified in amount and adds them to div#boxes.
// 1. The dimensions of the very first <div> are 30px by 30px.
// 2. Each element after the first one should be 10px wider and higher than the previous one.
// 3. All elements must have a random HEX background color. Use the ready-made getRandomHexColor function to get a color.

// Create a destroyBoxes() function that clears the contents of div#boxes, thereby removing all created elements.

const ref = {
  inputEl: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

let boxSize = 30;

ref.btnCreate.addEventListener("click", createBoxes);
ref.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = ref.inputEl.value;
  const newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    newBoxes.push(createRandomBox(boxSize));
    boxSize += 10;
  }
  ref.container.append(...newBoxes);
}

function createRandomBox(size) {
  const newBox = document.createElement("div");
  newBox.style.width = `${size}px`;
  newBox.style.height = `${size}px`;
  newBox.style.backgroundColor = getRandomHexColor();
  return newBox;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  ref.container.innerHTML = "";
  ref.inputEl.value = "";
}
