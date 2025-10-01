let count = 10;

// setInterval(function () {
//   count--;
//   console.log(count);
// }, 1000);

let intervall = setInterval(function () {
  if (count >= 0) {
    console.log(count);
    count--;
  } else clearInterval(intervall);
}, 1000);
