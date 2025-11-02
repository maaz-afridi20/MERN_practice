// this keyword

// console.log(this);

// function abc() {
//   console.log(this);
// }
// abc();

//
//
// this keyword in method.
// let myobj = {
//   name: "ali",
//   age: 20,
//   sayName: function () {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.age);
//   },
// };
// myobj.sayName();

//
//this keyword in listeners/handlers
//
// document.querySelector("h1").addEventListener("click", function (val) {
//   //   alert("clicked");
//   console.log(this);
// });

// document.querySelector("h1").addEventListener("click", function () {
//   console.log((this.style.color = "red"));
// });

//
//
// this keyword in classses:
// class Name {}
//

let profile = {
  name: "check",
  age: 40,
  address: function () {
    defg = () => {
      console.log(this);
    };
  },
};

let pp = {
  namesdf: "check",
  age: 140,
  abc: () => {
    console.log(this);
  },
};
pp.abc();
