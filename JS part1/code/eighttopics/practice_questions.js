/*
create an obj for student with name,age,and isEnrolled
*/

let objj = { name: "khan", age: 10, isEnrolled: false };

// any obj key can b any number or any boolean like
let obbj = {
  true: "yes",
  40: "age",
};

//
// given a dynamic key let your key is "age" how will you access user key.
let keyy = "age";
const userr = {
  name: "khan",
  age: 38,
  country: "pakistan",
};
userr[keyy];
// tu ye humein dynamically 38 de deega qk keyy mein age daala hyaa hai
// tu jab b ye userr[] mey jaye ga tu ye keyy k jagah age ajaye ga orr age 38 haii userr
// object mein tu humein 38 mill jaye ga.

// how can you prevent errors
// so the ans is by using optional chaining.
userr?.countries;

let locationss = {
  city: "kht",
  coordinates: {
    lat: 52.4,
    lng: 19,
  },
};
//
// destructure the city and lat from above object.
//

let { city } = locationss; // pahlay hm nay city bahir destructure kiyaa
let { lat } = locationss.coordinates;

//
// destructure the key first-name as a variable called firstName
const usery = {
  "first-name": "harsh",
};
let { "first-name": firstNamee } = usery;

//
// use for in loop to log all keys.

for (let l in locationss) {
  console.log(locationss[l]);
}

//
// use object.entries.
Object.entries(userr);

Object.entries(userr).forEach(function (val) {
  console.log(val);
});
