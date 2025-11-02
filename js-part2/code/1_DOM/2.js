let h11 = document.querySelector("h1");
h11.innerHTML = "<i>italic innerHTML</i>";
h11.innerHTML = "<b>bold innerHTML</b>";

let a = document.querySelector("a");
// a.href = "https:www.google.com";  simple method.
//
// changing attribute using setAttribute.
a.setAttribute("href", "https://www.google.com");

let brokemimg = document.querySelector("img");
brokemimg.setAttribute("alt", "Sorry Failed");

let bkimg = document.querySelector("img");
bkimg.setAttribute("href", "https://google.com");

//
// getAttribute ki help say attribute ko get kr sktay hain
let aa = document.querySelector("a");
console.log(aa.getAttribute("href"));

//
// remove Attribute.
let remove = document.querySelector("a");
remove.removeAttribute("href");
