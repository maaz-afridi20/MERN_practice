let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  inity: function () {
    // form.addEventListener("submit", this.submitForm.bind(userManager));
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (val) {
    // console.log("form submitted");
    val.preventDefault();
    this.addUser();
  },
  addUser: function () {
    console.log("user added.");

    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset(); // ye clear krta hai inputs ko jab form submit hota hai
    //
    this.renderUi();
  },
  renderUi: function () {
    document.querySelector(".users").innerHTML = "";
    //
    this.users.forEach((foreachuser, indexy) => {
      // card
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shoadow-xl p-8 flex flex-col item-center border border-blue-100 hover:scale-105 transition ";

      card.addEventListener("click", () => {
        this.removeUser(indexy);
      });

      // image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = foreachuser.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      //

      // name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = foreachuser.username;
      card.appendChild(name);

      //

      // role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = foreachuser.role;
      card.appendChild(role);

      //

      // description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = foreachuser.bio;
      card.appendChild(desc);

      //

      // finally append the whole card into body.
      document.querySelector(".users").appendChild(card);
    });
    //
  },
  removeUser: function (ind) {
    this.users.splice(ind, 1);
    this.renderUi();
  },
};
userManager.inity();
