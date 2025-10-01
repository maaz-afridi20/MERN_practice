/*
if else, else if
if (true) {
  console.log("ifff");
} else {
  console.log("elsee..");
}
*/

if (true) {
  console.log("ifff");
} else {
  console.log("elsee..");
}

// if we have more than one condition
// else if conditions...

if (loggedIn && Admin) {
  console.log("logged in and also Admin");
} else if (loggedIn) {
  console.log("Only loggedin");
} else {
  console.log("none...");
}

// Switch Case :

switch (valll) {
  case 1:
    break;
  case 1:
    break;
  case 3:
    console.log("case 3");
    break;
  default:
    console.log("default...");
    break;
}

//  Early Return Pattern...
// this is what called a early return statement.
// k hm nay if else ka block nai banaya uss aik line mein
// hi solve kar diyaa. tu iss ko kahtay hain early return
function getVal(valu) {
  if (valu < 30) return "<30";
  else if (valu < 50) return "<50";
  else if (valu < 75) return "<75";
  else return "<100";
}

getVal(76);

//  practice question...

function getGrade(score) {
  if (score >= 90 && score <= 100) return "A+";
  if (score >= 80 && score <= 89) return "B";
  if (score >= 70 && score <= 79) return "C";
  if (score >= 60 && score <= 69) return "D";
  if (score >= 0 && score <= 59) return "Fail";
  return "Invalid Marks"; // agar koii b statement nahi chaliii.. tu ye wala last wla
  // chalega...
}

getGrade(85);

// function rockPaperScissor(user, computer) {
//   if (user === "rock" && computer === "scissor") return "user won";
//   if (user === "scissor" && computer === "rock") return "computer won";
//   if (user === "paper" && computer === "rock") return "user won";
//   // and add another conditions also.
// hm iss ko orr b short kar sktay hain... like given below...
// }

function rockPaperScissor(user, computer) {
  if (user === computer) return "Draw"; // agar dono value same hon tu draw hoga.

  if (user === "rock" && computer === "scissor") return "user";
  if (user === "scissor" && computer === "paper") return "user";
  if (user === "paper" && computer === "rock") return "user";

  return "computer";
}

rockPaperScissor("rock", "rock");
