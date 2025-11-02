//
let formm = document.querySelector("form");
let minput = document.querySelectorAll("input");
let maindiv = document.querySelector("#main");
formm.addEventListener("submit", function (details) {
  details.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", minput[0].value);

  let h3 = document.createElement("h3");
  h3.textContent = minput[1].value;

  let h5 = document.createElement("h5");
  h5.textContent = minput[2].value;

  let p = document.createElement("p");
  p.textContent = minput[3].value;

  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  maindiv.appendChild(card);

  minput.forEach(function (inputval) {
    if (inputval.type !== "submit") {
      inputval.value = "";
    }
  });
});
