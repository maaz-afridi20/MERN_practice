let nav = document.querySelector("#nav");
let ull = document.querySelector("ul");
//
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

//
nav.addEventListener("click", function (val) {
  val.preventDefault();
  console.log("checking.");
  alert("navigation clicked");
});
//
//
//
ull.addEventListener("click", function (val) {
  if (val.target.style.textDecoration !== "line-through") {
    val.target.style.textDecoration = "line-through";
  } else {
    val.target.style.textDecoration = "";
  }
});
//
//
//
//
btn.addEventListener("click", function (val) {
  alert("btn clicked");
  console.log("btn clicked");
});
// c.addEventListener("click", function (val) {
//   console.log("c clicked");
// });

// b.addEventListener("click", function (val) {
//   console.log("b clicked");
// });
// a.addEventListener("click", function (val) {
//   console.log("a clicked");
// });
