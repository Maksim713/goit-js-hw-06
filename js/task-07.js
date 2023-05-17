const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

refs.input.addEventListener("input", fontСhange);

function fontСhange({ target }) {
  refs.span.style.fontSize = `${target.value}px`;
}
