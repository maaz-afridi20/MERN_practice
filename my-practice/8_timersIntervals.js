// let abc = setTimeout(function () {
//   console.log("this is setTimeOut after 5 sec.");
// }, 5000);

// setInterval(() => {
//   console.log("this is set interval to be performed after 5 sec.");
// }, 5000);

// clearTimeout(abc);

let count = 10;
let intervall = setInterval(function () {
  if (count >= 1) {
    console.log(count);

    count--;
  } else {
    clearInterval(intervall);
  }
}, 1000);
