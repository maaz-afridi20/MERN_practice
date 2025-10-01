/*
    OBJECTS...
*/

let obj = {
  name: "ali",
  age: 23,
  coding: "C++",
  car: "nothing",
  male: true,
};

obj.age;
obj.car;

// we can also access elements using squeare bracket.
obj["age"];

let userProfile = {
  id: 101,
  username: "maaz_khan",
  email: "maaz@example.com",
  isVerified: true,
  age: 22,
  address: {
    street: "123 Main Street",
    city: "Karachi",
    postalCode: "74000",
    country: "Pakistan",
    geo: {
      lat: 24.8607,
      lng: 67.0011,
    },
  },
  hobbies: ["coding", "football", "gaming", "traveling"],
  skills: {
    programming: ["JavaScript", "Python", "C++"],
    design: ["Figma", "Photoshop"],
    softSkills: ["communication", "problem-solving", "teamwork"],
  },
  education: [
    {
      degree: "Matric",
      year: 2018,
      institute: "ABC School",
    },
    {
      degree: "Intermediate",
      year: 2020,
      institute: "XYZ College",
    },
    {
      degree: "BS Computer Science",
      year: 2024,
      institute: "DEF University",
    },
  ],
  socialMedia: {
    twitter: "@maaz",
    github: "maazkhan",
    linkedin: "linkedin.com/in/maaz",
  },
  posts: [
    {
      id: 1,
      title: "Learning JavaScript",
      content: "Today I practiced objects and arrays!",
      likes: 120,
      comments: [
        { user: "Ali", text: "Great job!" },
        { user: "Sara", text: "Keep going 🚀" },
      ],
    },
    {
      id: 2,
      title: "MERN Stack Journey",
      content: "Started learning Node.js and Express!",
      likes: 85,
      comments: [],
    },
  ],
  isOnline: false,
  lastLogin: new Date("2025-08-10T14:30:00"),
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

//
//
// accessing..something
userProfile.address.geo.lat; // this will access latitude.

//
// destructuring
let { lat, lng } = userProfile.address.geo;

//
//
// Looping in object.

for (let keyy in userProfile) {
  console.log(keyy);
}

for (let mky in userProfile) {
  console.log(userProfile[mky]);
}

for (let bb in obj) {
  console.log(bb, obj[bb]); // for printing key and value both.
}

//
// object keys.
//
Object.keys(userProfile);

//
// object.entries
//
Object.entries(obj);

//
// copying
//
obj = { ...userProfile };
// this will copy userProfile object in obj

// copying using object.assign

let myobj = {
  id: 101,
  username: "maaz_khan",
  email: "maaz@example.com",
  isVerified: true,
  age: 22,
  address: {
    street: "123 Main Street",
    city: "Karachi",
    postalCode: "74000",
    country: "Pakistan",
    geo: {
      lat: 24.8607,
      lng: 67.0011,
    },
  },
};

let myoo = Object.assign({}, myobj);

//
//  deep cloning
//
let myobj2 = { ...myobj };

myobj2.address.city = "Lahore";

// tu iss say bachnay k liyee hm JSON.stringify ka use krtay hain
// theory available in theory folder.

let ab = {
  id: 101,
  username: "maaz_khan",
  email: "maaz@example.com",
  isVerified: true,
  age: 22,
  address: {
    street: "123 Main Street",
    city: "Karachi",
    postalCode: "74000",
    country: "Pakistan",
    geo: {
      lat: 24.8607,
      lng: 67.0011,
    },
  },
};
let aabb = JSON.parse(JSON.stringify(ab));

//
// optional chaining
//

// ab.address.city;
obj?.address?.city; // optional chaining
// this will not give you an error only will give you un defined.

//
//
// computed properties.
//
let role = "admin";
ab = {
  id: 101,
  username: "maaz_khan",
  email: "maaz@example.com",
  isVerified: true,
  [role]: "Afridi",
  age: 22,
  address: {
    street: "123 Main Street",
    city: "Karachi",
    postalCode: "74000",
    country: "Pakistan",
    geo: {
      lat: 24.8607,
      lng: 67.0011,
    },
  },
};
