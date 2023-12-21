// Write a script that, when focus on input is lost (blur event), checks its contents for the correct number of entered characters.
// The number of characters in the input is specified in its data-length attribute.
// If the number of characters entered is correct, the input's border turns green, or red with a wrong number.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", checkValidInput);

function checkValidInput(event) {
  if (event.currentTarget.value.length === parseInt(textInput.dataset.length)) {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.add("valid");
  } else {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  }
}
