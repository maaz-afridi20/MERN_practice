class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = ` ${text} : ${this.name}`;
    document.body.appendChild(h1);
  }

  checkRole() {
    console.log(`${this.name} you are ${this.role}`);
  }
}
class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach((elem) => {
      elem.remove();
    });
  }
}

let aa = new User("Sher", "koha", "abc", "sher@gmail.com");
aa.write("Hello..");
aa.checkRole();
let bb = new User("khan", "kpk", "abc", "khan@gmail.com");
bb.write("Checking..");

let admin1 = new Admin("aliAdmin", "punjab", "ady", "admin@gmaill.com");
admin1.write("i am the admin");
admin1.checkRole();
admin1.remove(); //this will remove all users.
//
//
// another example.
//
//
//
console.log("///////////////");

console.log("animal class eg.");

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} speaks good.`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // it will take from parent which is animal
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} barks.`);
  }
}
let dog = new Dog("abcy", "labrador");
dog.speak();
dog.bark();
console.log(dog.name);
console.log(dog.breed);
