let form = document.querySelector("form");
let password = document.querySelector("#password");
let email = document.querySelector("#email");

let isValid = true;
let passworderr = document.querySelector("#password-error");
let emailerr = document.querySelector("#email-error");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener("submit", function (val) {
  val.preventDefault();
  emailerr.style.textContent = "";
  passworderr.style.textContent = "";

  let emailans = emailRegex.test(email.value);
  let passans = passwordRegex.test(password.value);

  if (!emailans) {
    emailerr.textContent = "Email is incorrect";
    emailerr.style.display = "initial";
    isValid = false;
  } else {
    emailerr.textContent = "";
    emailerr.style.display = "none";
  }

  if (!passans) {
    passworderr.textContent = "Password Error";
    passworderr.style.display = "Initial";
    isValid = false;
  } else {
    passworderr.textContent = "";
    passworderr.style.display = "none";
  }

  if (isValid) {
    document.querySelector("#resultMessage").style.textContent =
      "Evertything Good";
  }
});
