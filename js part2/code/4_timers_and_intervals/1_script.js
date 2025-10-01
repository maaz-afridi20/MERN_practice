// setTimeout, setInterval
console.log("simple hello");

// theroy available in theory folder
setTimeout(function () {
  console.log("set timeOut print after 5 seconds");
}, 5000);

//setInterval

setInterval(function () {
  console.log("setInterval print after 5 seconds");
}, 5000);

// clearTimeout:
let abc = setTimeout(function () {
  console.log("timeout after 5 sec");
}, 3000);

clearTimeout(abc);

// ClearInterval:
let defg = setInterval(function () {
  console.log("interval after 3 sec");
}, 3000);
clearInterval(defg);
