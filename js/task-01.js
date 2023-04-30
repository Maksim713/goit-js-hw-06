const itemEl = document.getElementById("categories");
console.log("Number of categories:", itemEl.children.length);

const categoriesList = itemEl.querySelectorAll(".item");

categoriesList.forEach((element) => {
  const elName = element.querySelector("h2").textContent;
  const elCount = element.querySelectorAll("li").length;
  console.log("Category:", elName);
  console.log("Elements:", elCount);
});
