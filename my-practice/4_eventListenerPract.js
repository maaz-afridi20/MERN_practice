let whilefirstdiv = document.querySelector(".wholefirstdiv");
let pinsidefirstdiv = document.querySelector("#p-inside-firstdiv");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let inputt = document.querySelector("#sndinput");
let select = document.querySelector("select");
let submitevent = document.querySelector("#submitevent");

// btn.style.backgroundColor = "green";
// this will run with single click
// btn.addEventListener("click", function (val) {
//   btn.style.width = "150px";
// });
// when double click the btn this will run.

// btn.addEventListener("dblclick", function (val) {
//   btn.innerText = "dbl clicked";
//   btn.style.backgroundColor = "grey";
// });

// btn.addEventListener("dblclick", function (val) {
//   btn.style.color = "blue";
//   btn.style.backgroundColor = "yellow";
// });
// function chk() {
//   btn.style.backgroundColor = "grey";
// }

// btn.addEventListener("dblclick", chk);
// btn.removeEventListener("dblclick", chk);

// btn.removeEventListener("dblclick", function (val) {
//   btn.innerText = "dbl clicked";
//   btn.style.backgroundColor = "grey";
// });

//mouse hover event.
//
//
// this will perform when we hover over out button.
// btn.addEventListener("mouseenter", function (val) {
//   btn.style.fontWeight = "20px";
//   btn.style.backgroundColor = "orange";
//   btn.style.width = "250px";
// });

//
//
// input event
// inputt.addEventListener("input", function (val) {
//   console.log(val.data);

// ye if condition hm nay waisay lagai haik
// k agar empty space ho tu uss ko print mat karo
//  if (val.data !== null) {}
// }); // tu jo b hm input mein type karengay wo data iss val mein ata hai
// tu ab ye humari marzi hai k hm uss data ka kia karwana chahein..

//
//
//
// "change" event

select.addEventListener("change", function (val) {
  select.textContent = val.target.value;
});
//
//
//
//
// submit event...
submitevent.addEventListener("click", function (val) {
  val.preventDefault();
});
