let pr = new Promise(function (resolve, reject) {
  let random = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (random >= 5) {
      resolve(random);
    } else {
      reject(random);
    }
  }, 1000);
});
// pr.then(function (vals) {
//   console.log("value resolve " + vals);
// }).catch(function (vals) {
//   console.log("value rejected " + vals);
// });

//
//
// sync async.
async function abcd() {
  try {
    let valy = await pr;
    console.log("try resolved " + valy);
  } catch (err) {
    console.log("catched rejected " + err);
  }
}
abcd();
