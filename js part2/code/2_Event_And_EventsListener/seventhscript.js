//
let c = document.querySelector(".c");
let b = document.querySelector(".b");
let a = document.querySelector(".a");
let btn = document.querySelector("button");

btn.addEventListener("click", function (dd) {
  console.log("btn clicked");
});
a.addEventListener("click", function () {
  console.log("a clicked");
});
b.addEventListener("click", function () {
  console.log("b clicked");
});
c.addEventListener(
  "click",
  function () {
    console.log("c clicked");
  },
  true // (this will on the capture phase));
);
