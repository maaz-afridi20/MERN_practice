let nm = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let mform = document.querySelector("form");
let small = document.querySelector("small");

// mform.addEventListener("submit", function (dets) {
//   dets.preventDefault();
//   if (nm.value.length <= 2) {
//     document.querySelector("#hide").style.display = "initial";
//     document.querySelector("#hide").style.color = "red";
//   } else {
//     document.querySelector("#hide").style.display = "none";
//   }
// });

//
//
// mform.addEventListener("submit", function (dets) {
//   dets.preventDefault();
//   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   //   let ans = regex.test("alikhan@gmail.com");
//   let ans = regex.test("a@a.a");
//   console.log(ans);
// });

//
//  lets say we create our custom regex.
mform.addEventListener("submit", function (dets) {
  dets.preventDefault();
  const regex = /^[a-zA-Z0-9_]{3,20}$/; // our custom regex. this will only allow
  // alphabets, numbers and only 3 to 20 characters
  let ans = regex.test("check_name");
  // so now this will allow because we allowed alphabets,underscore,and numbers.
  console.log(ans);
});
