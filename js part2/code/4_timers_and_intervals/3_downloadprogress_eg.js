let count = 0;
let mseconds = 5;
let progressbar = document.querySelector(".progress-bar");
let progressText = document.querySelector("#progress-text");
let alertbanner = document.querySelector(".alert");

let intv = setInterval(function () {
  if (count < 100) {
    count++;
    progressbar.style.width = `${count}%`;
    progressText.textContent = `${count}%`;
  } else {
    document.querySelector("h2").textContent = "Download Complete";
    clearInterval(intv);
  }
}, (mseconds * 1000) / 100);

let msetout = setTimeout(function () {
  alertbanner.style.display = "none";
  clearTimeout(msetout);
}, 5000);
