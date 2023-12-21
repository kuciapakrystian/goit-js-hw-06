// Write a script that responds to changes in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, the text size will change responding to scrollbar dragging.

const sizeControlInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("span#text");

sizeControlInput.addEventListener("input", onSizeInput);

function onSizeInput() {
  textEl.style.fontSize = `${this.value}px`;
}
