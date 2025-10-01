let btn = document.querySelector("button");

function lightdark() {
  if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  } else {
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  }
}

if (localStorage.getItem("theme")) {
  document.querySelector("body").classList.add(localStorage.getItem("theme"));
} else {
  lightdark();
}

window
  .matchMedia("(prefers-color-scheme:dark)")
  .addEventListener("change", function () {
    lightdark();
  });

btn.addEventListener("click", function () {
  if (document.querySelector("body").classList.contains("dark")) {
    // document.querySelector("body").classList.remove("dark");
    // document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("body").classList.toggle("light");
    // we can also use this toggle instead of remove and add..

    //
    localStorage.setItem("theme", "light");
  } else {
    // document.querySelector("body").classList.remove("light");
    // document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.toggle("light");
    document.querySelector("body").classList.toggle("dark");
    localStorage.setItem("theme", "dark");
  }
});
