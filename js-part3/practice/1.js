let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

let userManager = {
  allUsers: [],
  inity: function () {
    form.addEventListener("submit", this.submitForm(this));
  },
  submitForm: function (val) {
    val.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.allUsers.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    document.querySelector("users").innerHTML = "";
    this.allUsers.forEach(function (forEachUser, forEachIndex) {
      const card = document.createElement("div");

      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shoadow-xl p-8 flex flex-col item-center border border-blue-100 hover:scale-105 transition ";
    });
  },
  removeUser: function () {},
};
userManager.inity();
