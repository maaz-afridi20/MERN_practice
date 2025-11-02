function CreateBiscuits(name, price, qty, category) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.category = category;
}
CreateBiscuits.prototype.company = "Huawei"; // prototype.

let buscuit1 = new CreateBiscuits("super", 10, 5, "simiple");
let buscuit2 = new CreateBiscuits("again super", 100, 2, "choclate");
console.log(buscuit1);
console.log(buscuit2);

function CreatePencils(name, price, company, color) {
  this.name = name;
  this.price = price;
  this.company = company;
  this.color = color;
  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
  };
}
let blackpencil = new CreatePencils("black", 20, "super", "red");
let whitepencil = new CreatePencils("white", 100, "super", "blue");
blackpencil.write("black pencil");
whitepencil.write("white pencil");
//
//
//
//
//
//
function Makejacket(jacketname, color, price) {
  this.name = jacketname;
  this.color = color;
  this.price = price;
}
Makejacket.prototype.write = function (ftntext) {
  let hh = document.createElement("h1");
  hh.textContent = ftntext;
  hh.style.color = this.color;

  document.body.append(hh);
};
let jacke1 = new Makejacket("half sleeves", "black", 4000);
jacke1.write("jacket created");
console.log(jacke1);
