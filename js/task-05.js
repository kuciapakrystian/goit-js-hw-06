 // Pobierz wszystkie elementy li.item
  const categoriesList = document.querySelectorAll('#categories .item');

  // Policz liczbę kategorii
  const numberOfCategories = categoriesList.length;
  console.log(`Number of categories: ${numberOfCategories}\n`);

  // Dla każdej kategorii
  categoriesList.forEach(category => {
    // Znajdź nazwę kategorii (tekst nagłówka h2)
    const categoryName = category.querySelector('h2').textContent;

    // Znajdź liczbę elementów w danej kategorii
    const elementsInCategory = category.querySelectorAll('ul > li').length;

    // Wypisz nazwę kategorii i liczbę elementów w konsoli
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsInCategory}\n`);
  });