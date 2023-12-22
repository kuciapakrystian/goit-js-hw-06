const categoryList = document.getElementById("categories");

console.log(`Number of categories: ${categoryList.children.length}`);
for (let i = 0; i < categoryList.children.length; i++) {
  const categoryItem = categoryList.children[i];
  const categoryName = categoryItem.firstElementChild.textContent;
  const numberOfCategories = categoryItem.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfCategories}`);
}
