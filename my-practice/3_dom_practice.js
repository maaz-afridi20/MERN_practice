// dom practice.
// let divid = document.getElementById("divid").innerText;
// console.log(divid);

// let container = document.getElementsByClassName("container");

// let divid = document.querySelector("h1");
// console.log(divid);

//
//
// defining variabels..
let yellowgreendiv = document.querySelector("#yellowgreendiv");
let a = document.querySelector("a");
let containerdiv = document.querySelector(".container");
let inpsearchbox = document.querySelector(".inpsearch-box");
let cardclassdiv = document.querySelector(".cards");
let dividdiv = document.querySelector("#divid");
let h1 = document.querySelector("h1");
let img = document.querySelector("img");
//
// yellowgreendiv.textContent = "this is from my js. backend.";
// yellowgreendiv.innerText = "from inner text";
// yellowgreendiv.style.width = "100%";
// yellowgreendiv.innerHTML = "<i> italic inner html from js.</i>";
// console.dir(yellowgreendiv);

//
//
// attribute manipulation:
a.href = "https://www.google.com";
// console.log(a);
//
//
//
// setting any attribute.
//
img.setAttribute("src", "https://unsplash.com");
// img.setAttribute("alt", "From Unsplash");
// console.log(img);
//
//
//
//
//
// getting any attribute.
//
//
// console.log(img.getAttribute("src"));
// console.log(a.getAttribute("href"));
//
//
//
// removing any attribute.
// a.removeAttribute("href"); this will remove whole href.
// console.dir(a);

// let hh1 = document.createElement("h1");
// hh1.textContent = "dynamically created h1";
// document.body.append(hh1);

// let hh2 = document.createElement("h1");
// hh2.textContent = "dynamically created part 2";
// hh2.style.color = "red";
// document.body.prepend(hh2);

// Insert Before.
//
//
// let h2 = document.createElement("h2");
// h2.innerText = "dynamically h2";
// h2.style.color = "yellow";
// document.body.insertBefore(h2, img);

//
//
// Remove
// this is not removeAttribute this will remove any whole element.
// inpsearchbox.remove(); this will remove whole input search box.

//
//
//  append child.
let h11 = document.createElement("h1");
h11.innerHTML = "<i>this is dynamic h11</i>";
h11.style.color = "green";
yellowgreendiv.appendChild(h11);
//
// prepend child.
let hh4 = document.createElement("h4");
hh4.innerText = "this is prepend child";
yellowgreendiv.prepend(hh4);
//
//
// remove something in child.
yellowgreendiv.removeChild(hh4);

//
//
//
let h51 = document.createElement("h5");
h51.innerText = "this is h51";
document.body.append(h51);

let h52 = document.createElement("h5");
h52.innerText = "h52";
document.body.append(h52);
//
let h53 = document.createElement("h5");
h53.innerText = "h53";
document.body.append(h53);
//
let h54 = document.createElement("h5");
h54.innerText = "h54";
document.body.append(h54);
//
//
//
// styling through css.
h51.style.color = "yellow";
h51.style.textTransform = "capitalize";
h51.style.background = "#a88888ff";
h51.style.border = "5px";
h51.style.borderColor = "black";
h51.style.borderRadius = "3px";
console.dir(h51);

//
//
//
// Class lists.
//
// classlist.add(classname);
// classlist.remove(classname);
// classlist.toggle(classname);
//
//
//
let allul = document.querySelectorAll("ul li:nth-child(3n)");
// allul.style.color = "blue";
// allul.style.textTransform = "capitalize";

allul.forEach(function (val) {
  val.style.color = "green";
  val.style.backgroundColor = "blue";
  val.style.borderRadius = "10px";
  val.style.borderTopColor = "red";
});
