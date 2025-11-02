let objy = {
  name: "harsh",
};

let obje2 = {
  age: 23,
};
// function ab() {
//   console.log(this);
// }
// ab.call(obje2);

//
//
// Apply...
//
//
// function aby(a, b, c) {
//   console.log(this);
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// aby.apply(obje2, [19, 500, 20]);
//
//
// Bind.
function check(aa, bb, cc) {
  console.log(this);
  console.log(aa);
  console.log(bb);
  console.log(cc);
}
let fncy = check.bind(obje2, 49, 8, 100);
fncy();
