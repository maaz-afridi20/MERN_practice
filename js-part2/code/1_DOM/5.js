/*
dynamic dom
*/
let myh1 = document.createElement("h1");
myh1.textContent = "dynamically added myh1 in div...";
document.querySelector("div").appendChild(myh1);

// let mh6 = document.createElement("h1");
// mh6.textContent = "dynamic mh6";
// // document.body.insertBefore(mh6, document.querySelector("h3"));
// let h3 = document.querySelector("h3");
// document.body.insertBefore(mh6, h3);

let sdiv = document.querySelectorAll("div")[1];
let mh1 = document.createElement("h1");
mh1.textContent = "mh1 text content heading";
sdiv.appendChild(mh1);

let pp1 = document.createElement("p");
pp1.textContent = " this is my Lorem ";
let sdp = sdiv.querySelectorAll("p")[1];
sdiv.insertBefore(pp1, sdp);
