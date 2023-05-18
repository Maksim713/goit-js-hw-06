const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const elements = {
    email: formElements.email.value.trim(),
    pass: formElements.password.value.trim(),
  };

  if (elements.email === "" || elements.pass === "") {
    return alert("Все поля должны быть заполнены!");
  }

  console.log(elements);

  event.target.reset();
}
