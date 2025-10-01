let inp = document.querySelector("input");
let span = document.querySelector("span");
// let span2 = document.getElementById("span2");

// inp.addEventListener("input", function () {
//   console.log("kuch input huaa");
//   console.log(inp.value.length); // ye ho value.length hai iss say hm maloom
//   // kar saktay hain k value jo put huee hai
//   // uss ki length kiaa hai
// }); // input mein jab b kuch likhaa jaye ya maloom
// karwana ho
// uss ko event lagwana ho tu hm input event ka use krtay hain.

inp.addEventListener("input", function () {
  //   span.textContent = 20 - inp.value.length;
  //
  // ye ham nay simple total characters likh diye hain 20
  //   orr ye jo inp ki value ki jo length hai uss ko hm uss say minus
  // kar rahay hain orr wo minus ho rahi hai. magar jab hm 20 say zyada
  // character likh detay hain tu ye minus mein chalay jaye gay tu ye aisa hm nai chahtay
  //  tu iss k liye hm ye karengay k aik if condition laga lengay... like

  let left = 20 - inp.value.length;
  span.textContent = left;
  //   let changetext = document.getElementById("changetext");
  if (left < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "black";
  }
});
