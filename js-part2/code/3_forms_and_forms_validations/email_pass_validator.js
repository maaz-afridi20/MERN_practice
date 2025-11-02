let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  document.querySelector("#email-error").textContent = "";
  document.querySelector("#password-error").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);

  let isValid = true;

  if (!emailAns) {
    document.querySelector("#email-error").textContent = "Email is incorrect";
    document.querySelector("#email-error").style.display = "initial";
    isValid = false;
  } else {
    document.querySelector("#email-error").textContent = "";
    document.querySelector("#email-error").style.display = "none";
  }
  if (!passwordAns) {
    document.querySelector("#password-error").textContent =
      "Password is incorrect";
    document.querySelector("#password-error").style.display = "initial";
    isValid = false;
  } else {
    document.querySelector("#password-error").textContent = "";
    document.querySelector("#password-error").style.display = "none";
  }

  if (isValid) {
    document.querySelector("#resultMessage").textContent =
      "Everything is alright";
  }
});
