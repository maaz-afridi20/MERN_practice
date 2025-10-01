//

let div = document.querySelector("div");
let h1 = document.querySelector("h1");
window.addEventListener("keydown", function (dets) {
  //   console.log(dets);
  if (dets.key === " ") {
    h1.textContent = "SPC";
  } else {
    h1.textContent = `${dets.key}`;
  }
});

let btndiv = document.querySelector("#btn");
let myinput = document.querySelector("#myinput");

// btndiv.addEventListener("click", function () {
//   myinput.click();
// });
// myinput.addEventListener("change", function (details) {
//   //   console.log(details.target.files[0].name); this will print the exact name of that file
//   btndiv.textContent = `${details.target.files[0].name} Choosen`;
// });

btndiv.addEventListener("click", function () {
  myinput.click();
});
myinput.addEventListener("change", function (details) {
  if (details.target.files[0]) {
    btndiv.textContent = details.target.files[0].name;
  } else {
    btndiv.textContent = "Choose File";
  }
});
