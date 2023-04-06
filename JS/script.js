const form = document.getElementById("register-form");
const pass1 = document.getElementById("password");
const pass2 = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const col = element.parentElement;
  const errorDisplay = col.querySelector("#error");

  errorDisplay.innerText = message;
  col.classList.add("error");
  col.classList.remove("success");
};

const setSuccess = (element) => {
  const col = element.parentElement;
  const errorDisplay = col.querySelector("#error");

  errorDisplay.innerText = "";
  col.classList.add("success");
  col.classList.remove("error");
};

const validateInput = () => {
  const passwordValue = pass1.value.trim();
  const passwordConfirmValue = pass2.value.trim();

  if (passwordConfirmValue !== passwordValue) {
    setError(pass2, "Passwords Don't Match");
  } else {
    setSuccess(pass2);
  }
};
