const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elementsList = document.querySelector("#ingredients");

const createElements = (ingredients) => {
  return ingredients.map((ingredient) => {
    const newEl = document.createElement("li");
    newEl.textContent = ingredient;
    newEl.classList.add("item");

    return newEl;
  });
};

const newElements = createElements(ingredients);
elementsList.append(...newElements);
