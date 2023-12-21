// The counter consists of a span and buttons, which, when clicked, should increase and decrease its value by one.

let counterValue = 0;

const ref = {
  counterSpan: document.querySelector("#value"),
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
};

const updateCounter = (value) => {
  ref.counterSpan.textContent = value;
};

ref.btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter(counterValue);
});

ref.btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  updateCounter(counterValue);
});
