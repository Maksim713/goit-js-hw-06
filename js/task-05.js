const refs = {
  nameInput: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

refs.nameInput.addEventListener("input", onInputChange);

function onInputChange() {
  if (refs.nameInput.value.trim() === "") {
    refs.nameOutput.textContent = "Anonymous";
  } else {
    refs.nameOutput.textContent = refs.nameInput.value;
  }
}
