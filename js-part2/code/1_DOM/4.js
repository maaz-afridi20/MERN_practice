/*
dynamic dom
*/

let mh1 = document.createElement("h1");
mh1.textContent = "dynamic mh1";
document.body.append(mh1);

// let mh2 = document.createElement("h2");
// mh2.innerText = "dynamic h2";
// let body = document.querySelector("body");
// let h3 = document.querySelector("h3");

// body.insertBefore(mh2, h3);

let mh2 = document.createElement("h2");
mh2.textContent = "dynamic h2";
let h3 = document.querySelector("h3");
document.body.insertBefore(mh2, h3);

// tu ye dono methods ko use kr sktay hain...
let statich1 = document.querySelector("h1");
statich1.remove();

//
//
//
