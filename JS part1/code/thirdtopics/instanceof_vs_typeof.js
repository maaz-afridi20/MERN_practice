/*
Agar kahin hm typeof ka use kartay hain tu uss mein quirks hain qk  aag hm typeof NaN kartay hain tu wo number show krta hai jo k true nai haii tu agar humein fully correctly pata lagana hai k ye cheez array ka hai ya naiii matlab array ya koi b cheez ka instance hai ya nai tu hm instanceOf ka use kr sktay hain…
Tu simply jo instanceof ye karta haii k ye check krta hai k matlab 
_____ wala variable kiaa isss cheez ka part hai k naiii  ______ 
Matlab agar mein ye likhoon let a = [];
Console.loe(a instanceof Array) tu ye true de dega…
Instanceof jo haii wo siraf reference variable type par kaam karta haii primitive par kaam nai karta
Tu agar mein likhoon k 
Let a = 12;
Console.log(a instanceof Number)   tu ye dega false halankay ye true haii k 12 jo hai wo number haiii magar wo phirr b false dega qk number primitive data type haii orr instanceof primitive data type par kaam nai karta…  so tu instanceof jo hai qo [], {}, (){}  in teeno k sath kam karta hai…
Primitive values k sath hum zyada tar typeof use kartay hain.

*/

let a = [];
console.log(a instanceof Array);

let x = 10;
let y = 30;

if (x > 20 && y < 35) {
  console.log("A");
} else {
  console.log("B");
}

let tempp = 35;
if (!(tempp < 30)) {
  console.log("hot");
} else {
  console.log("not hot.");
}

let bee = 0;

if (bee) {
  console.log("truthy");
} else {
  console.log("falsy");
}

let score = 25;
let grade = score >= 90 ? "A" : score >= 81 ? "B" : score >= 50 ? "C" : "fail";
console.log(grade);

let loggedin = true;
let hastoken = false;
let access = loggedin && hastoken ? "Allow" : "Deny";

console.log(access);

let ab = 3;
let bvy = ab++;
console.log(bvy, ab);

let n = 5;
let resultt = n++ + ++n;
console.log(resultt);

let count = 5;
if (count-- === 5) {
  console.log("matched");
} else {
  console.log("not");
}
