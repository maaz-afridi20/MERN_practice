// what is DOM
/*
so all the elements in html like h1, div, body, anything includes in DOM


q2) what's diff bw element node and text node.
Ans) for eg when we create <p> </p> this is element node while the text inside this
is called the element node. the element node is the html tag. while the text node is
the content inside it. element node may have child like inside p tag it have another
tag like <b> </b> while text node doesn't have any tag.

Q3)what's diff bw getElementById() and querySelector()
Ans) the first diff is that the getElementById() only ask us the id of element
iss mein hm koii class, koii element nai dy sktay while jo querySelector hai wo multipurpose
hai uss ko use krtay huee hm koi b tag,class, anything kuch b select kr sktay hain

-> second diff is that k in getElementById("anyid") iss mein humein id ko select krtay hue
# nai lagana parta qk us siraf select karta hi id ko hai tu issay khud pata hai tu ye 
iss ko use krtay hue # laganay ki need nai hai. while in querySelector agar humein iss mein kisi
cheez ki id ko select krna hai tu phirr hum # use karengay qk querySelector multipurpose hai
tu iss ko agar id select krwani hai tu iss ko batana parega using #

Q4) what is getElementByClassName()? is it an array?
Ans) tu iss say hm elements ki class ko select krtay hain. orr ye humein return krta hai
aik htmlCollection jo k array ki hiii tarah hota hai magar hm array uss ko nai kahtay
uss ko hm htmlCollection kahtay hain.

Q5) use querySelectorAll.
Ans) let aa = document.querySelectorAll(".buy-now"). so now this will select all the
classes which have buy-now class

Q6) select heading of page by id and change its text?
let khanh2 = document.getElementById("khan");
khanh2.innerText = "Sheriyans Coding School";

the second method to do it.
let khanh2 = document.querySelector("#khan");
khanh2.innerText = "sh......";


Q7) select all li elements and print their text using loop.
so as we know that querySelectorAll("") has array like structure so we can 
apply loop easily on it.
tu ye kiaa karega k hm nay iss pr loop chalaya jiss mein har baar
aik value aati rahti hai tu simply hm nay sirf uss ko console kr diya
tu humein li nai chahiyee humein uss ka text chahiyee tu iss liye hm nay
li.textContext ko console kr diya.

let liall = document.querySelectorAll("li");
liall.forEach(function (val) {
  console.log(val.textContent);
});
// second way of doing this.
for (let i = 0; i < liall.length; i++) {
  console.log(liall[i].textContent);
}


Q8) what's the diff bw the  textContent and innerText when we use it for 
changing our text?
Ans) textContent is a new way of doing this and its very fast way for changing any text. it
can even change the hidden text. matlab jin text ki visibility hidden huee hoti hai
un text ko b change krwa skta hai. while innerText jo hai wo quite slow way hai of 
changing the text.
so it's recommended to use textContent instead of innerText.


Q9) select a paragraph and change its content.withi this {<b> Updated </b> by js}
Ans) let myp = document.querySelector("p");
myp.innerHTML = "{<b> Updated </b> by js}";

Q10) how do you get src of img
Ans) let imgsrc = document.querySelector("img");
console.log(imgsrc.getAttribute("src"));

second method to do this.
let imgsrc = document.querySelector("img");
console.log(imgsrc.src)

Q11) what does setAttribute do?
Ans) it set or change the attribute of any element. like
let imgsrc = document.querySelector("img");
imgsrc.setAttribute("src", "https://google.com");
it will change src attribute to google.com

Q12) select a link and change its href.
Ans) let aa = document.querySelector("a");
aa.setAttribute("href", "https://trends.google.com");

Q13) add a title attribute dynamically
Ans) let divv = document.querySelector("div");
divv.setAttribute("title", "hovering time");

Q14) remove disabled attribute from btn
Ans) let btn = document.querySelector("button");
btn.removeAttribute("diabled");
this will remove diabled remove attribute from btn
*/

//
// Dynamic Dom Manipulation questions
//

/*
Q1) what does createElement do
Ans) it create any element you want dynamically. matlab k agar wo page mein likhaa
na b ho tu hm uss ko js hi help say add krwaa sktay hain. like
let ddomh1 = document.createElement("h1");

Q2) how to delete child element from parent node
Ans) document.querySelector("div").removeChild("anyelement");
this will remove your given element from div you selected.

Q3) create a ul and add something in the last of it.
Ans) let abc = document.createElement("li");
abc.textContent = "WaterMelon";
document.querySelector("ul").appendChild(abc);

Q4) create a new img element with placeholder and add it at the top of the div.
Ans) let newimg = document.createElement("img");
newimg.setAttribute("src", "https://unsplash.com");
newimg.setAttribute("alt", "sorry please");
let div = document.querySelector("div").prepend(newimg);
newimg.classList.add("placeholder"); // ye tu siraf agar hm nay jo pahlay say hi class likhii
// huee hai css ki orr uss ko attach krwana hai tu ye uss ka hai
console.dir(newimg);


Q5)select something from list and then delete it from dom
Ans) let lii = document.querySelector("li");
let ul = document.querySelector("ul").removeChild(lii);
this will remove the first li from the ul list.

Q6)add a classList name highlight to even item in list.
Ans) let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function (val) {
  val.classList.add("highlight");
});
console.dir(li);

Q7) set the fontsize of all p elements to 18px using .style
*/

let allp = document.querySelectorAll("p");
allp.forEach(function (val) {
  val.style.fontSize = "25px";
});
