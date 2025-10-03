//  fat arrow function..

let multiply = (a, b) => {
  return a * b;
};

function sayHi(name = "ali") {
  console.log("Hi", name);
}
sayHi();

// use rest operator to accept any number of scores and add it..

function allScores(...scores) {
  let totalscore = 0;
  scores.forEach(function (val) {
    totalscore = totalscore + val;
  });
  //   console.log(totalscore);
  return totalscore;
}

allScores(10, 50, 20, 20);

//
// what will return this..
function f() {
  return;
}

// f();
console.log(f()); // this will return undefined
// when any function doesn't return anything it will return undefined.

function abc(val) {
  val();
}

abc(function () {
  console.log("passing a function inside another function.");
});

/*
tu iss mein ye huaa k hm nay aik function banaya abc jo accept kar raha hai val ko. hm nay 
abc function ko call kiyaa orr uss k argument mein hm nay aik orr function pass kr diya.
jo k print kr raha hai
tu jab ye run karengay tu jo val hai hm nay iss mein function ko pass kiyaa hai tu ye
aik function ho gya tu yehiii hm nay wahan prr val(); likhh liyaa qk ye neeechay accept kr raha hai
aik function ko tu ye aik function ho gya hai..
tu ye jo val() hai ye aik function haii jo k woo wala function hai jo hm nay neechay say
pass karwaya hai orr urr function mein hm print karwa rahay hain tu wo print ho jaye ga.
*/

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = outer();

counter();
counter();
counter();

//
// Bmi Calculator...

function bmi(weight, height) {
  return weight / (height * height);
}

// console.log(bmi(70, 1.4));
console.log(bmi(65, 1.4).toFixed(2));

//
// agar hm chahty hain k ye value zyada points mein na ayee tu hm
// hm iss ko round kr sktay hain...
// jiss value ko b jitnay values tuk round krna chahtay hain tu un ko
// .toFixed() orr bracket mein utna value likh dein...
// like    bmi(70,1.4).toFixed(2);

//
// create discount calculator...

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let discounter = discountCalculator(10);

discounter(200);
// so this will deduct 10% from 200rs.

//
// tu jab ham nay discountCalculator chalaya uss mein value di uss nay return kiyaa function
// tu jab uss nay return kiyaa function tu ye jo neechay discountCalculator(10); likhaa hai
// uss ki jagah aik function agaya orr wo store ho gya discounter mein
// tu jab b discounter ko hm chalayengay tu ye jo return mein hua hua function haii ye
// wala chalega..

function disty(newdiscount) {
  return function (price) {
    return price - price * (newdiscount / 100);
  };
}

let ten = disty(10); // jab hm iss ko run karengay orr price dengay tu ye humein 10%
// discount dega.
let twenty = disty(20); // jab hm iss ko run karengay orr price dengay tu ye humein 20%
// discount dega.

console.log(ten(1500));
console.log(twenty(5000));

function county() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let cc = county();
let dd = county();
//
console.log(cc());
console.log(cc());
console.log(dd());

//
// double the value...
function double(val) {
  return val * 2;
}
console.log(double(10));
