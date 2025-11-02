// window.addEventListener("mousemove", function (val) {
//   console.log(val.clientX);
// });
let div = document.querySelector("div");
//
div.addEventListener("mousemove", function (val) {
  div.style.backgroundColor = "green";
  div.style.color = "white";
  div.style.borderRadius = "20px";
});

div.addEventListener("mouseout", function (val) {
  div.style.backgroundColor = "red";
  div.style.borderRadius = "0";
});
