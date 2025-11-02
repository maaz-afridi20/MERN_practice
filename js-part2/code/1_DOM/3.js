/*
    Dynamic Dom
*/

let hh1 = document.createElement("h1");
hh1.textContent = "Dynamically H1";
document.body.append(hh1);

let hh2 = document.createElement("h2");
hh2.textContent = "Dynamically h2";
document.body.prepend(hh2);

let mdiv = document.createElement("div");
mdiv.innerHTML = ` <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quia
    laudantium reiciendis voluptate sit sint a architecto unde in vero expedita
    vitae molestiae perferendis, quam dolore quas quasi. Commodi, excepturi?
  </p>`;
document.body.prepend(mdiv);
