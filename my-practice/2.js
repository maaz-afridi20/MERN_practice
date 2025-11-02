// objects. practice..
let userProfile = {
  id: 101,
  username: "maaz_khan",
  email: "maaz@example.com",
  isVerified: true,
  age: 25,
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

// spread operator..

let obj = { ...userProfile };
// this will copy all the things from userProfile object to (obj)

// console.log(userProfile.education[0].degree);
// console.log(userProfile.settings.notifications.email);

// let checking = userProfile.posts[0].comments[0].user;
// console.log(checking);
// getting user name from userProfile->first post-> first comment-> user

// for in loop using in objects
// for (let mkey in userProfile) { //=> this will give you keys
//   console.log(mkey);
// }

// will give you all values of keys.
// for (let mkey in userProfile) {
//   console.log(userProfile[mkey]);
// }

// for printing both keys and values.
//
// for (const mkey in userProfile) {
//   console.log(mkey, userProfile[mkey]);
// }

//this will only print only keys of any object.
// console.log(Object.keys(userProfile));
//
// this will print only values of any obj.
// console.log(Object.values(userProfile));

// object.entries:
// console.log(Object.entries(userProfile));

//
// deep clonning using json.stringigy,json.parse

let notifications = {
  email: true,
  sms: false,
  push: true,
};
let noti = JSON.parse(JSON.stringify(notifications));
