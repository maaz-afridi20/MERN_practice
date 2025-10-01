// theory available in word file.
// localStorage

// for storing something in localStorage
// localStorage.setItem("name", "alikhan");

// for getting something from localStorage:
//
// localStorage.getItem("name");
// let nameval = localStorage.getItem("name");
// console.log(nameval);

// for deleting something from localStorage.
// localStorage.removeItem("name");

// for updating something in localstorage:
// localStorage.setItem("name", "harsh");
// localStorage.setItem("name", "khanafridi");

//
//  session Storage:
//
// setting something(session storage)
// sessionStorage.setItem("name", "session");

// getting something(session storage).
// sessionStorage.getItem("name");

// removing something(session storage):
// sessionStorage.removeItem("name");

// updating something(session storage):
// sessionStorage.setItem("name", "sessionstorage");

// sessionStorage.clear();

//
//
// Cookies:
//
// document.cookie="email=alikhan@gmail.com";
// document.cookie = "age=30";

// imp
// localStorage.setItem("friends", JSON.stringify(["abc", "def", "ghi", "jkl"]));
let fr = JSON.parse(localStorage.getItem("friends"));
console.log(fr);
