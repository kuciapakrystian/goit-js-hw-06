const totalOfEl = document.querySelectorAll(".item");

const categoryOfEl = totalOfEl.forEach((e) =>
  console.log(
    `Category: ${e.firstElementChild.textContent} Elemenets: ${e.lastElementChild.children.length}`
  )
);
