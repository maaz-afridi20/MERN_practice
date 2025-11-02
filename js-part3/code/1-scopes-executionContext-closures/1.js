// Scope:
//
// global scoped
// var name = "check";
//
// functional scoped
// function abc() {
//   var a = 10;
// }

//
// block scoped
{
}
// if (true) {
//   var jj = 100;
// }

//
//
//
// Execution Context:
//
//
// Lexical Scopping:
// function cc() {
//   let kk = 1;
//   function bb() {
//     console.log(kk);
//   }
// }

//
//
//
function mmclosure() {
  let age = 10;
  return function () {
    console.log(age);
  };
}
let mfnc = mmclosure();
mfnc();

//
//
//
// private counters...
// function countForMe() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }
// let fncy = countForMe();
// fncy();
// fncy();

// let fncy2 = countForMe();
// fncy2();
// fncy2();
// fncy2();
// fncy2();

//
//
//
// Encapsulation:
function clickLimiter() {
  let click = 0;
  return function () {
    if (click < 5) {
      click++;
      console.log(`Clicked ${click} Times `);
    } else {
      console.error("Limit Exceeded");
    }
  };
}
let cly = clickLimiter();
cly();
cly();
cly();
cly();
cly();
cly();
