const inputRef = document.getElementById("validation-input");
// console.dir(inputRef);

inputRef.addEventListener("blur", addBorderColor);
const dataLength = inputRef.dataset.length;

function addBorderColor(event) {
  const valueLength = event.target.value.trim().length;
  const isValid = valueLength === Number(dataLength);
  setValidityClass(isValid);
}

function setValidityClass(isValid) {
  inputRef.classList.toggle("valid", isValid);
  inputRef.classList.toggle("invalid", !isValid);
}
