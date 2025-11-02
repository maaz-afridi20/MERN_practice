let coffee = {
  color: "black",
  drink: function () {
    console.log("drinking.");
  },
};
let bigCoffee = Object.create(coffee);
console.log(bigCoffee);
bigCoffee.drink();
