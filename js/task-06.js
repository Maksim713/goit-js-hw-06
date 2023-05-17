const inputRef = document.getElementById("validation-input");
// console.dir(inputRef);

inputRef.addEventListener("blur", addBorderColor);
const dataLength = inputRef.dataset.length;

function addBorderColor(event) {
  const valueLength = event.target.value.length;
  if (valueLength === Number(dataLength)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}