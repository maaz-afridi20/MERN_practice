// let pr = new Promise(function (resy, rejy) {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random() * 10);
//     if (rn > 5) {
//       resy();
//     } else {
//       rejy();
//     }
//   }, 3000);
//
//
//
//   let rn = Math.floor(Math.random() * 10);
//   if (rn > 5) {
//     resy("resy value");
//   } else {
//     rejy("rejy value");
//   }
// });

// pr.then(function (val) {
//   console.log(`then value : ${val}`);
// }).catch(function (val) {
//   console.log(`catch value : ${val}`);
// });

let pry = new Promise(function (mres, mrej) {
  let randy = Math.floor(Math.random() * 10);
  if (randy >= 5) {
    // mres(randy);
    mres("accepted randy value");
  } else {
    // mrej(randy);
    mrej("rejected randy value");
  }
});
pry
  .then(function (mreskhan_value) {
    console.log("apnii resy value " + mreskhan_value);
  })
  .catch(function (mrejkhan_value) {
    console.log("apni rejy value " + mrejkhan_value);
  });
