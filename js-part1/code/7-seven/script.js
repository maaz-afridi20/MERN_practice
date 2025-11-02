/*
    Arrays:
    iss ki theory saari word file mein save hai jo k theory folder mein hai.

*/

let marks = [
  53, 89, 10, 82, 19, 300, 599, 45, 200, 85, 68, 19, 29, 69, 88, 100,
];
console.log(marks[0]);

marks[0] = 64;
console.log(marks[0]);

marks.push(500); // this will add 500 inside marks array

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

marks.pop();
marks, push(10); //
marks.shift(); //
marks.unshift(899); //
marks.splice(2, 2);
marks.slice(0, 2);
marks.reverse();
marks.sort(function (val1, val2) {
  // return val1-val2; for ascending order;
  return val2 - val1; // for descending order
});
marks.map(function (val) {
  return; // in map we must return something otherwise it will give error
});
marks.forEach(function (val) {}); // while in foreach if we don't return something
// its not issue.
marks.filter(function (val) {
  return;
});
marks.reduce(function (accumulator, val) {
  return accumulator + val;
}, 0); // 0 in the last is the starting value of accumulator variable jo k
// ham nay 0 dii hai ye hm kuch b de sktay hain
marks.find(function (val) {
  return;
});
marks.some(function (val) {
  return; // it only return true or false if condition meets.
});
marks.every(function (val) {
  return; // fully opposite to .some method.
});
//
//
console.log("after shift.");

for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

marks.splice(2, 1);

let newArr = marks.slice(0, 5);
console.log(newArr);

let numbers = [
  53, 89, 10, 82, 19, 300, 599, 45, 200, 85, 68, 19, 29, 69, 88, 100,
];
console.log(numbers);
console.log("before slice method");

let nerNum = numbers.slice(0, 5);
console.log(nerNum);

console.log("original array after slice method");
console.log(numbers);

let sortingArry = [
  53, 89, 10, 82, 19, 300, 599, 45, 200, 85, 68, 19, 29, 69, 88, 100,
];
let abc = numbers.sort(function (first, second) {
  return first - second;
});
console.log(abc);

let primeNumbers = [2, 3, 5, 7, 11, 13, 17];
primeNumbers.forEach(function (val) {
  console.log(val);
});

primeNumbers.map(function (val) {
  return 12;
});

let pp = primeNumbers.map(function (vl) {
  if (vl > 10) return vl;
});
console.log(pp);

let ppp = primeNumbers.map(function (val) {
  if (val > 10) return val;
  else return "Small";
});
console.log(ppp);

//
// filter method.
// primeNumbers.filter(function (val) {
//   return true;
// });

primeNumbers.filter(function (val) {
  if (val > 5) return true;
  return false;
});

//
// reduce method :
let ans = primeNumbers.reduce(function (accumulator, val) {
  return accumulator + val;
}, 0);

let scores = [45, 89, 72, 60, 100, 34, 88];
let scoresAns = scores.reduce(function (accumulator, val) {
  return accumulator + val;
}, 0);
console.log(scoresAns);

//
// find method :
marks.find(function (val) {
  return val === 19;
});

let newmrks = marks.find(function (val) {
  return val === 19;
});

let nnn = marks.find(function (val) {
  return val * 10 === 100;
});

//
// Some Method:
marks.some(function (val) {
  return val > 100;
});

let mmm = marks.some(function (val) {
  return val > 200;
});

//
// Every method:
marks.every(function (val) {
  return val > 200;
});

let am = marks.every(function (val) {
  return val > 300;
});

//
// de structuring:
let [a, b] = marks;
let [c, d, , e, , f] = marks;

//
// Spread Operator:
let xyz = [78, 27, 83, 69, 119, 84];
// let xyz2 = xyz; wrong method to copy
let xyz2 = [...xyz];
// if we want to copy whole array to another variable
// this is correct way.
