// Event Object.

// let maindiv = document.querySelector("#maindiv");
// maindiv.addEventListener("click", function (details) {
//   console.log(details);
// });

//
//
// let nav = document.querySelector("#nav");
// nav.addEventListener("click", function (dets) {
//   alert("clicked");
// });

//
//
//
//

let ull = document.querySelector("ul");
ull.addEventListener("click", function (details) {
  //   console.log(dets.target);
  //   details.target.style.textDecoration = "line-through";
  // details.target.classList.add("lt");
  details.target.classList.toggle("lt");
});

//
//
//
//
//
//
let mdiv = document.querySelector("#mdiv");
let sdiv = document.querySelector("#sdiv");

mdiv.addEventListener("click", function (event) {
  //   details.target.style.backgroundColor = "red";
  if (event.target.id === "sdiv") {
    sdiv.style.borderRadius = "5px";
    sdiv.style.backgroundColor = "grey";
  }
});
