// Selecting your variables..
//
let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");
let taske = [];

const form = document.querySelector("form");
const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']"
);
const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']"
);
const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']"
);
const purposeInput = form.querySelector(
  "input[placeholder='Enter purpose of note']"
);
const categoryRadios = form.querySelectorAll("input[name='category']");
const submitBtn = document.querySelector(".submit-btn");

//
//iss tarah ham nay saray inputs ko select kr liyaa hain..

//
// code start here.
//

function saveToLocalStorage(obj) {
  // sab say  pahlay check karo k kuch hai ya nai local storage mein
  if (localStorage.getItem("tasks") === "") {
    let oldTasks = [];
    oldTasks.push(obj);
    //JSON.stringify(oldTasks); // say ye string mein convert ho jaye ga.
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    // ye else ham nay lagaya hai k agar matlab pahlay say local storage
    // empay naii huaa tu ye wala step chalay ga.
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj); // ye ab new wala object ko add kar lega old tasks mein
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }

  /*
  tu ye basically kia karega wo ye k jab ham kuch cheez local storage mein save karna chahein
  tu ye pahlay dhekega k uss name say tu kuch save nai hai pahlay say local storage mein
  tu agar null hain matlab kuch b tasks nai hain tu ye aik array banaye ga oldTasks k name say
  uss mein jo b obj hm add karengay wo uss mein add krta jaye ga
  us k baad jo b tasks aye hongay wo hm stringify kar k local storage mein put kar dengay
  
  agar wo null nai aya matlab pahlay say tasks hain tu ham nay pahlay un tasks ko nikala
  uss ko json.parse kr k string say bahir nikaal kr uss ko wapis original array form 
  mein kr diya
  uss k baad ham nay push kiyaa humara jo b object huaa yani k obj uss actual array mein 
  uss k baad ham nay local storage mein tasks ko set kiaa or wo wo unhe tasks ka 
  stringify version hain yani k ham nay string mein kr diya siraf un ko.
  */
}
//
addNote.addEventListener("click", function () {
  formContainer.style.display = "initial";
  // ye ham nay iss liye kiyaa hai k agar hm plus walay button pr click karein
  //   tu humara jo aik form hai wo show honay lagay ga qk pahlay ham nay uss ka
  // display ko initial kiyaa huaa tha tu iss say wo show hona start ho jaye ga
});
closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
});
// iss say jo hm nay + btn pr click kr k form ko show krwaya tha wo close ho jaye ga.

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const imageUrl = imageUrlInput.value.trimp();
  const fullName = fullNameInput.value.trimp();
  const homeTown = homeTownInput.value.trimp();
  const purpose = purposeInput.value.trimp();
  //trimp ka hm nay iss liye use kiya hai k kabi kabar
  // koi log siraf spaces hi de detay hain jo k ham nai chahtay
  // tu ye trimp jo hai sari empty spaces ko hata deta hai.

  let categorySelected = false;
  categoryRadios.forEach((selectOrNot) => {
    if (selectOrNot.checked) {
      categorySelected = selectOrNot.value;
    }
  });
  // ye ham nay ye nay aik foreach loop lagaya hai jiss mein ham nay saray jo
  //   radios ko select kiyaa thaa uss pr lagaya hai jab ham console.dir mein dhaiktay hain
  // radios ki property ko tu uss mein aik "checked" name say aik property hai tu uss mein
  // true ya false ata hai k ye checked hai ya nai tu agar check hai tu true or nai tu false.
  //  tu ye kiaa karay ga k har time aik aik radio pr jaye ga uss ki ye check wali property ko
  // dhaikega k true hai ya nai agar true huee tu ye matlab selected hai tu agay chala jaye ga
  // orr ye jo ooper wala ham nay categorySelected =false lagaya hai iss ko true kr dega
  //
  //
  //
  // validation logic.
  if (imageUrl === "") {
    alert("please enter image url");
    return;
  }
  if (fullName === "") {
    alert("Enter full name");
    return;
  }
  if (homeTown === "") {
    alert("Enter your home town");
    return;
  }
  if (purpose === "") {
    alert("Enter purpose of adding note");
    return;
  }
  //
  // yahan pr ham siraf check kr rahay hain k kiaa abi tak jo ham nay
  // selectedCategory ki value false hai matlab false say change nai huee
  // matlabb k agar kuch select huaa hoga tu ye false say change huee hogi
  // tu ye agar change nai huee false say tu alet do k kuch select karo
  // orr ye agay nai jaye ga.
  if (!categorySelected) {
    alert("Select any category");
    return;
  }
  //
  // this will only run if all validation passes successfully
  alert("Form submitted successfully");
  form.reset();

  //
  /*   tu bass humein yahan prr ab local storage mein save krwana hai tu ham 
yahan par humaray uss function ko likh lengay jo ooper likha hai saveToLocalStorage k name say
*/
  saveToLocalStorage({
    imageUrl,
    fullName,
    homeTown,
    purpose,
    selectOrNot,
  });
  // tu ham nay ye sara data bhej diya jo k save karana hai.
});
