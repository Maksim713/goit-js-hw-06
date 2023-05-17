function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
  bodyColor: document.querySelector("body"),
};

refs.button.addEventListener("click", changeСolorОnСlick);

function changeСolorОnСlick() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = refs.bodyColor.style.backgroundColor;
}
