function settingTheme() {
  if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("dark");
  } else {
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
  }
}
