const numOfCategEl = document.querySelector("#categories");
const itemEl = numOfCategEl.childElementCount;
console.log(`Number of categories: ${itemEl}`);
const totalOfEl = document.querySelectorAll(".item");
const categoryOfEl = totalOfEl.forEach((e) =>
  console.log(
    `Category: ${e.firstElementChild.textContent} Elemenets: ${e.lastElementChild.children.length}`
  )
);