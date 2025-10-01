// Events handling.
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
btn.addEventListener("click", function () {
  h1.style.color = "red";
});

let p = document.querySelector("p");
p.addEventListener("click", function () {
  p.style.color = "green";
});

let dcp = document.querySelector("p");
dcp.addEventListener("dblclick", function () {
  dcp.style.color = "blue";
  dcp.style.backgroundColor = "yellow";
});
//
// removing event listener
let h3 = document.querySelector("h3");
function checkkk() {
  h3.style.color = "red";
}
h3.addEventListener("click", checkkk);
h3.removeEventListener("click", checkkk);

//
// mouse hover event
let myhover = document.getElementById("mybox");
myhover.addEventListener("mouseenter", function () {
  hhover.style.backgroundColor = "#292020ff";
});
