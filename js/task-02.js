const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.getElementById("ingredients");
const arrayLi = [];

ingredients.forEach((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList.add("item");
  console.log(listEl);

  arrayLi.push(listEl);
});

ulEl.append(...arrayLi);
