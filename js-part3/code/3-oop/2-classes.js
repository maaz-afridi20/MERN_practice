class Createpencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.colory = color;
  }
  write(ftntext) {
    let hh = document.createElement("h1");
    hh.textContent = ftntext;
    hh.style.color = this.colory;

    document.body.append(hh);
  }
  //   erasy() {
  //     //  this will erase/delete all the h1 from the body.
  //     document.body.querySelectorAll("h1").forEach(function (val) {
  //       val.remove();
  //     });
  //   }

  // this will only remove those element jiss ka color wo ho. like
  erasy() {
    document.body.querySelectorAll("h1").forEach((val) => {
      if (val.style.color === this.colory) {
        val.remove();
      }
    });
  }
}

let p1 = new Createpencil("ali", "samsung", 25, "black");
let p2 = new Createpencil("khan", "ihpone", 15, "yellow");
let p3 = new Createpencil("khan", "ihpone", 15, "purple");
p1.write("my p1");
p2.write("this p2");
p3.write("that p3");
p3.write("trying to remove.");
p3.write("hello this is ");
p1.write("again p1");
p1.write("again p1");
p1.write("again p1");

p1.erasy();
p2.erasy();
