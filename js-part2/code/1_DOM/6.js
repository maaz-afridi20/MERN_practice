// sixth dom manipulation...
//font families =   'Courier New', Courier, monospace;"

let mh1 = document.createElement("h1");
mh1.innerText = "dynamically added Heading1";
document.body.append(mh1);

//
// Styling updates...

let h2 = document.querySelector("h2");
let p = document.querySelector("p");
// console.dir(h2);
h2.style.color = "red";
h2.style.backgroundColor = "brown";
h51.style.color = "yellow";
h51.style.borderTop = "5";
p.style.borderColor = "black";
h2.style.fontFamily = "monospace";
p.style.textTransform = "capitalize";

let h1 = document.querySelector("h1");
h1.classList.add("check");
console.log(h1);

//
// removing class list.
p.classList.remove("check"); // this will remove that class from that element

//
// Toggle
p.classList.toggle("check");

let khanh2 = document.getElementById("khan");
khanh2.innerText = "Sheriyans Coding School";
