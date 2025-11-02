let parentdiv = document.querySelector(".parent");
//
//

function createToaster(configm) {
  return function (val) {
    let div = document.createElement("div");
    div.textContent = val;
    div.className = `toaster ${configm.theme} ${configm.positionX} ${configm.positionY}`;

    parentdiv.appendChild(div);

    if (configm.positionX !== "left" || configm.positionY !== "top") {
      document.querySelector(".parent").className += ` ${
        configm.positionX === "right" ? "right-5" : "left-5"
      }
        ${configm.positionY === "bottom" ? "bottom-5" : "top-5"} `;
    }

    setTimeout(() => {
      //   document.querySelector(".parent").removeChild(div);
      parentdiv.removeChild(div);
    }, configm.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "top",
  positionY: "right",
  theme: "light",
  duration: 3,
});

toaster("Download Done 1");

//
// this is samething
//
// function createtoaster(mconfig) {
//   return function (notification) {
//     let div = document.createElement("div");
//     div.className = `toaster ${mconfig.theme} ${mconfig.positionX} ${mconfig.positionY}`;

//     div.textContent = notification;
//     document.body.appendChild(div);

//     setTimeout(() => {
//       document.body.removeChild(div);
//     }, mconfig.duration * 1000);
//   };
// }

// let toaster = createtoaster({
//   positionX: "left",
//   positionY: "top",
//   theme: "dark",
//   duration: 3,
// });

// toaster("this is noti");
