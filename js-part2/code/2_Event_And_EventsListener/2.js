// Common Events.
//
// input.

// let minput = document.querySelector("input");
// minput.addEventListener("input", function () {
//   console.log("something inputed..");
// });
let mminput = document.querySelector("input");
mminput.addEventListener("input", function (details) {
  console.log(details.data);
});

let sndinput = document.getElementById("sndinput");
sndinput.addEventListener("input", function (details) {
  //   console.log(details.data);
  if (details.data !== null) {
    console.log(details.data);
  }
});

//
//
// change(event):
let sel = document.querySelector("select");
let h2 = document.querySelector("h2");
sel.addEventListener("change", function (details) {
  h2.textContent = `${details.target.value} selected`;
});

let sel2 = document.querySelector("#sndselect");
let hh1 = document.querySelector("#hh1");
sel2.addEventListener("change", function (details) {
  hh1.textContent = `${details.target.value} selected`;
});
