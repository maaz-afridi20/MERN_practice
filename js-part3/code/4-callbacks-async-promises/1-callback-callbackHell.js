// SyncCode -> aisa code jo line by line chalay is called SyncCode
// AsyncCode -> aisa code jo saara ready ho jaye run honay k liye phir run ho jaye
//              is called Async code.

//
// function kuchDerBaddChaloonga(val) {
//   setTimeout(() => {
//     console.log(val);
//   }, Math.floor(Math.random() * 10) * 1000);
// }
// kuchDerBaddChaloonga("after sometime.");
//
//
//  this is call-back function.
//
function kuchDerBaddChaloonga(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
kuchDerBaddChaloonga(function () {
  console.log("this is call back.");
});

//
//
console.log("call back hell.");

// call back hell.

function profileLekrAaro(username, cb) {
  setTimeout(() => {
    console.log(`profile fetched of ${username} `);
  }, 2000);
}
profileLekrAaro("ali", function () {});
