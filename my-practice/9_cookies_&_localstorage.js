// local storage.
// session storage.
// cookies.

// how to store data.
// in local storage.
localStorage.setItem("age", "40");
localStorage.setItem("address", "kohat");
console.log(localStorage.getItem("age")); // for getting data. local storage.

localStorage.setItem("name", "alikhan");
console.log(localStorage.getItem("name"));

// removing somedata from local storage.
localStorage.removeItem("name");

//
// updating something.
localStorage.setItem("address", "main pindi road");
//
//
//
sessionStorage.setItem("check", "i am checking");
sessionStorage.setItem("sessionage", "100");
// for storing something in session storage.

//
//
console.log(sessionStorage.getItem("check"));
console.log(sessionStorage.getItem("sessionage"));

// for getting something from local storage.

//
sessionStorage.removeItem("sessionage");
// for removing something from session storage.

//
sessionStorage.setItem("check", "session checking");
// for updating something in session storage.
// simply use the name of property that you want to update
// and write the updated value
//
//
//
// Cookies.
//
document.cookie = "email=something.gmail.com";
document.cookie = "age=50";

//
//
//
// stringify somethings.
localStorage.setItem("frinds", JSON.stringify(["a", "b", "c", "d"]));
// let fr = JSON.parse(localStorage.getItem("frinds"));
// console.log(fr);
