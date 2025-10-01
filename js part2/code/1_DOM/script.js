/*
DOM
*/
document.querySelector;
document.getElementById; // yahan prr hm siraf id k through element ko select kr sktay hain
document.getElementsByClassName; // jab agar kisi element k pass id na ho class name ho

//
//
//
document.getElementById("heading");
// iss ko ham kisi variable mein b save kr sktay hain. like
let headinggg = document.getElementById("heading");
console.log(headinggg);
console.dir(headinggg); // agar humein tag naii poori detail chahiyee tu phirr ham
// console log nai instead console.dir use karengay.

//
//
// by class name.
document.getElementsByClassName("checkclass");
let cls = document.getElementsByClassName("checkclass");

//
//
// the getElementsByClassName and getElementById these are the old method to select
// things now we use querySelector and querySelectorAll

document.querySelector("h1");
let quu = document.querySelector("h1");

// query selector all
document.querySelectorAll("h1");
let qua = document.querySelectorAll("h1");

let thirdh1 = document.querySelectorAll("h1")[2];
thirdh1.style.color = "red";

let fifth = document.querySelector("h1:nth-of-type(5)");

// document.querySelector("p").addEventListener("click", function () {
//   document.querySelector("p").style.backgroundColor = "brown";
// });

// document.querySelector("p").addEventListener("click", function () {
//   document.querySelector("p").style.color = "white";
// });

//
// changing text.
//

let h1 = document.querySelector("h1");
// h1.textContent = "HardWorking with DOM";
h1.innerHTML = "<i> inner html </i>";
h1.innerText = "inner text";
