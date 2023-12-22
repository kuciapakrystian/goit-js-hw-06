const controlSwitcher = document.getElementById("font-size-control");
const textInput = document.getElementById("text");
const attribute = controlSwitcher.getAttribute("min");
console.log(attribute);
controlSwitcher.addEventListener("input", (event) => {
  textInput.style.fontSize = `${event.currentTarget.value}px`;
});
