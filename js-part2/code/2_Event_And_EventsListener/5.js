/**/
// let mdiv = document.querySelector("#abcd");
// mdiv.addEventListener("mouseover", function (details) {
//   mdiv.style.backgroundColor = "yellow";
// });
// mdiv.addEventListener("mouseout", function (details) {
//   mdiv.style.backgroundColor = "red";
// });

let div = document.querySelector("#abcd");

div.addEventListener("mouseover", function (details) {
  div.style.backgroundColor = "green";
  div.style.color = "white";
  div.style.borderRadius = "20px";
});

div.addEventListener("mouseout", function (details) {
  div.style.backgroundColor = "red";
  div.style.borderRadius = "0";
});

//
// Mouse Move
//

// window.addEventListener("mousemove", function (details) {
//   console.log(details);
// });

window.addEventListener("mousemove", function (details) {
  //   console.log(details.clientX, details.clientY);

  div.style.top = details.clientY + "px";
  div.style.left = details.clientX + "px";
});
