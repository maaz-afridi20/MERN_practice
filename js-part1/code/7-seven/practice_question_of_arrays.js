// create array with 3 fruit names and print the second one
let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]);
//
// add guava at the end and strawberry at the beginning of this array
fruits.push["guava"]; // this will add at the end
fruits.shift("strawberry"); // this will add in the start.

//
// replace mango with kiwi in array
fruits.pop();
fruits.push("kiwi");

//
// push() will add element in the last index while
// unshif() will add element in first index.

//
//  insert red and blue at index 1 in colors array

let colors = ["green", "yellow"];
colors.splice(1, 0, "red", "blue");
/* 
jab b hm splice ka method use krtay hain tu uss mein jo b cheez ya koii value
ko hm nikalnaa chahtay hon tu hm uss index ki value de dengay k yahan say nikalna hai
jaisay k hm nay 1 nikalna hai matlab 1 inxex say orrr phirr uss k baad value deni
hai k nikaalnaa kitnay hain  tu yahan prr hm nay 0 likhaa hai jiss ka matlab hai
k aik b nai hatana
tu ye ab hm nay trick lagaya haiii k yahan colors array mein hm nay 0 k sath
red, blue laga liyaa tu ye ab remove krnay k bajaye ulta add kr dega in dono ko
in red and blue ko add kr dega colors array mein.
tu ye aik trick hai jo k hm splice ko use kr k use kr sktay hain.
*/

//
// extract only middle 3 elements from the array.
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
cities.slice(1, 4); // so this will remove lhr,isld,quetta
// it depends on us that from where we want to remove the elements.
// and kahan tuk hatana hai.

//
// sort array alphabatically and then reverse it.
cities.sort(); //agar hm sort mein kuch a-b ya b-a wala kuch na likhein
// tu phirr b ye alphabatically array ko sort kr deta hai..
sortedcities.reverse();

// hm iss ko aik sath b use kr sktay hain like
// cities.sort().reverse(); tu pahlay ye sort kar dega phir revers kr dega.

//
// use .map() to square each number.
let marks = [45, 89, 72, 60, 100, 34, 88];
let cc = marks.map(function (val) {
  return val * val;
});

//
// use .filter() to keep numbers greater than 10
let filteruse = marks.filter(function (val) {
  if (val > 10) return true;
  return false;
});
// tu ye ye check karega k agar value sy bara hai tu true kr do matlab wo value jaye
// gii new array mein agar na ho tu false

//
//
// use reduce method to add this array

marks.reduce(function (acc, val) {
  return acc + val; // this will add all the values of array.
}, 0);

// we can do the above same method using fat arrow function; like

marks.reduce((acc, val) => {
  return acc + val;
}, 0);

//
//
// use .find() to go the first number less than 10;
marks.find(function (val) {
  return val < 10;
});
// same method using fat arrow function
// marks.find((val) => {
//   return val < 10;
// });

//
//
// use .some() to find if any student score above 85 or not
marks.some(function (val) {
  return val > 85;
});
// same method using fat arrow function
marks.some((val) => {
  return val > 85;
});

marks.some((val) => {
  return val < 35;
});

//
//
// use .every() to check that if all numbers are even
marks.every(function (val) {
  return val % 2 === 0;
});
// same question usnig fat arrow function
marks.every((val) => {
  return val % 2 === 0;
});

//
//
// destructure this to get the first name and the last name.
let [firstt, , , , lastt] = cities;

//
//
//  merge 2 arrays using spread operators.
let one = [2, 3, 5, 7, 11, 13, 17];
let two = [45, 89, 72, 60, 100, 34, 88];
let three = [...one, ...two];
console.log(three);

//
//
// add ali to this array to the start using spread operator
cities = ["kohat", ...cities]; // this will add kohat in cities array.
