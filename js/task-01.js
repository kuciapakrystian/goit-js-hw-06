// Counts and prints to the console the number of categories in ul#categories

const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

// For each li.item in the ul#categories list, find and print to the console the text of the element's title (the <h2> tag) and the number of items in the category

categoriesItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
