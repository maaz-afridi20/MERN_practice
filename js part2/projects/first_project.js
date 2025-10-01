let users = [
  {
    name: "Ali Khan",
    bio: "Frontend developer passionate about React and UI design.",
    img: "https://picsum.photos/200?random=1",
  },
  {
    name: "Ali Ahmed",
    bio: "Graphic designer who loves creating digital illustrations.",
    img: "https://picsum.photos/200?random=2",
  },
  {
    name: "John Doe",
    bio: "Fullstack developer and coffee enthusiast.",
    img: "https://picsum.photos/200?random=3",
  },
  {
    name: "Emma Watson",
    bio: "Content writer and storyteller with a love for blogging.",
    img: "https://picsum.photos/200?random=4",
  },
  {
    name: "David Smith",
    bio: "Backend engineer specializing in Node.js and databases.",
    img: "https://picsum.photos/200?random=5",
  },
  {
    name: "Hassan Raza",
    bio: "Software engineer working on scalable web apps.",
    img: "https://picsum.photos/200?random=9",
  },
  {
    name: "Olivia Green",
    bio: "Marketing specialist and social media strategist.",
    img: "https://picsum.photos/200?random=10",
  },
];

// first think we need is to show all users.
// filter karna har baar input karnay pay
// show filter uses.

// ham nay simply aik function banaya hai jo k
// users ko show karega orr uss function mein nay aik arr ko accept krwaya hai

function showUsers(arr) {
  arr.forEach(function (muser) {
    // create outer div
    let card = document.createElement("div");
    card.classList.add("card");
    // ye siraf aik div banay ga
    // orr uss mein aik class ko add kr dega card k name say

    // create image
    let img = document.createElement("img");
    img.src = muser.img;
    img.classList.add("bg-img");
    // ye siraf ye karega k aik img ka aik element banay ga
    // uss mein ham nay jo img ka url hai wo ham nay wo ooper walay array sy le liya hai
    // orr uss img ko ham nay class de dii hai bg-img k name say

    //
    // create blurred layer div
    let blurredlayer = document.createElement("div");
    blurredlayer.style.backgroundImage = `url(${muser.img})`;
    blurredlayer.classList.add("blurred-layer");

    // create content div
    let mcontent = document.createElement("div");
    mcontent.classList.add("content");
    // ye siraf content k name say element create karay ga or class dedega content k name say

    //  create h3 and paragraph
    let mheading = document.createElement("h3");
    mheading.textContent = muser.name;

    let mpara = document.createElement("p");
    mpara.textContent = muser.bio;

    // append heading and paragraph to content
    mcontent.appendChild(mheading);
    mcontent.appendChild(mpara);

    // append all to card
    card.appendChild(img);
    card.appendChild(blurredlayer);
    card.appendChild(mcontent);

    // finally append card to the body of the container
    document.querySelector(".cards").appendChild(card);
  });
}
showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  //   console.log(inp.value); tu agar ham ye karengay tu ye jo b
  // input yani search mein kuch print ho raha hoga tu ye humein uss ki value dega.

  /* 
  ham nay yahan prr siraf ye kiyaa hai k filter ko appy kr diyaa hai tu 
  basically filter mein ye hota hia k jo b ham nay condition lagai hai wo hi
  uss mein add krta hai matlab k bs uss ko siraf check krta hai tu ham nay yahan par ye 
  kiyaa hai k jo b user ho jiss ka name starts ho raha ho uss value say 
  ho ham input kar rahay hain search box mein uss ko return karo.
  
  tu agar ye condition true huee tu filter basically aik blank aray banata hai 
  tu ye uss array mein uss user ko dal dega k han ye user ka name is say 
  start ho rha hai jo hm input kar rahay hain
  */
  let newUsers = users.filter((userrr) => {
    return userrr.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  document.querySelector(".cards").innerHTML = "";
  //   ham nay innerHtml iss lay empty krrr diyaa hai k pahlay k jo results
  // uss ko clear kar do matlab agar ye ham aisa na karein tu ye aisa karega k
  // jo pahlay k kisi nay print kiyee hongay tu ye un ko b inp.value mein jo ayengay tu
  // ye un ko b add karta rahega tu result humein nahi milta rahega.
  showUsers(newUsers);
});
