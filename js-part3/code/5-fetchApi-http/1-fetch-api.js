// fetch("https://randomuser.me/api/")
//   .then(function (mrawdata) {
//     // console.log(mrawdata);
//     return mrawdata.json();
//   })
//   .then(function (mdata) {
//     // console.log(mdata);
//     console.log(mdata.results[0]);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//
//
//  we can also write the above code useing the arraw function..
// fetch("https://randomuser.me/api/")
//   .then((mray) => mray.json())
//   .then((saidata) => console.log(saidata))
//   .catch((err) => console.log(err));

//

//
//practice...
//

function getUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then((rawdata) => rawdata.json())

    .then((actualdata) => {
      document.querySelector(".users").innerHTML = ""; // ye pichlay walay saray users ko hata dega.
      //
      actualdata.results.forEach(function (muser) {
        const card = document.createElement("div");

        card.className = "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full";

        // inner container.
        //
        const innerFlex = document.createElement("div");
        innerFlex.className = "flex items-center space-x-4";

        //Avatar image.
        //
        const avatar = document.createElement("img");
        avatar.className =
          "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
        avatar.src = muser.picture.large; // ye api say araha hai data.
        avatar.alt = "Err..";
        //
        //
        // Text container.
        const textContainer = document.createElement("div");

        // name
        const name = document.createElement("h2");
        name.className = "text-xl font-semibold text-gray-100";
        name.textContent = muser.name.first + " " + muser.name.last;

        // email
        const email = document.createElement("p");
        email.className = "text-gray-400";
        //   email.textContent = "JohnDoe@gmail.com";
        email.textContent = muser.email;

        // status badge.
        const badge = document.createElement("span");
        badge.className =
          "initial-block mt-2 px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full";
        badge.textContent = "Active";

        textContainer.appendChild(name);
        textContainer.appendChild(email);
        textContainer.appendChild(badge);

        innerFlex.appendChild(avatar);
        innerFlex.appendChild(textContainer);

        card.appendChild(innerFlex);
        document.querySelector(".users").appendChild(card);
      });
    })

    .catch(function (err) {
      alert("Some Error Occured");
    });
}
getUsers();
//
//
// iss btn ko click kr k hm khud refresh krwaa sktay hain.
document.querySelector("#refreshbtn").addEventListener("click", function () {
  getUsers();
});
