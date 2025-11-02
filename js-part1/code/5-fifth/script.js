//   LOOPS...

/*
FOR LOOP -> kahin bar humein pata hota hai k kahan say jana hai
            kahan tak jana haii or kaisay jana hai tu hm for loop ka use karengay
            jaisay kahan say jana hai starting point pata hai, kahan tuk jana hai
            end point pata hai, kaisay jana hai matlab 1 1 barh kr jana hai ya 2, 2
            barh kar jana hai...
            tu iss mein humein teeno cheezain pata thi tu hm for loop ka use karengay
            jaisay 1-50 tk jaao tu iss mei humein starting point b pata hai jo k 1 hai
            ending point b pata haii jo k 50 hai orr aik aik barh k jana hai ye b pata hai

WHILE LOOP -> jab humein pata hota hai k kahan say jana hai, kab ruknaa hai
              orr kaisay jana hai tu hm while loop ka use karengay
              iss mein humein koii guarantee naiii hotii k kab rukega...
              matlab agar hm kahein tu 1 say counting start karo orr tub tak
              jaao jab tk mein hello na bol dun. tu ab iss ki kiaa guarantee hai
              k mein hello kab boloonga tu ye 1000 tk b ja skta hai yaa iss say zyada
              ya iss say km tu iss tarah ki situation mein hm while loop ka use karengay

              bss ruknaa kab haii ye pata haii k bss mein hello bol dun bss ye siraf pata hai
              tu iss tarah ki situtuation mein k humein pata hi na ho k ye
              condition ki koii guarantee na ho k aakhir kab complete hogii tu h while 
              loop ka hm use karengay...

DO WHILE LOOP
FOREACH
*/

/*
1 1 1 1 1 1 
1 2 3 4 5 6
ab ye dono repetation hain
ooper walay mein 1 repeat ho raha hain orr neechay walay mein print ka statement
repeat ho rha hai jiss ki help say counting print kr raha hain...

for(start; end; changee){}


// so like this we write code in while loop..
start
while(end){}
    //code
    change 
*/

for (let i = 1; i < 101; i++) {
  console.log(i);
}

// while loop

let i = 1;
while (i < 20) {
  console.log(i);
  i++;
}

//  Do While Loop
do {} while (end);
// iss loop mein jo point hai k chahay ye while ki condition agar
// ghalat hii q na ho magar ye Do wali condition (aik) dafa zaroor chalegiii

// CONTINUE AND BREAK

for (let i = 1; i < 21; i++) {
  console.log(i);

  if (i === 11) {
    break; // ye loop 11 tuk chalega orr 11 prr ruk jaye ga
    // qk hm nay break lagaya hai...
  }
}

for (let i = 1; i < 21; i++) {
  if (i === 15) {
    continue;
  }
  console.log(i);
}

//  Practice Questions.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let ab = 10;
while (ab > 0) {
  console.log(ab);
  ab--;
}

// for printing even..
for (let nmbr = 1; nmbr < 21; nmbr++) {
  if (nmbr % 2 === 0) {
    console.log(nmbr);
  } else "Odd";
}

// for printing odd numbers.

let ody = 1;
while (ody < 21) {
  if (ody % 2 === 1) {
    console.log(ody);
  }
  ody++;
}

// printing 5 table..

for (let i = 1; i < 11; i++) {
  console.log(`5 * ${i} =  ${5 * i}`);
}

// find sum of number from 1 to 100
let sum = 0;
for (let i = 1; i < 101; i++) {
  sum = sum + i;
}
console.log(sum);

// print all the values from 1 to 50 which are divisible by 3

for (let i = 1; i < 51; i++) {
  if (i % 3 === 0) console.log(i);
}

// ask the user for a number and print whether each number from 1 to that number
// is even or odd.

let vall = prompt("Give any number");
for (let i = 1; i <= vall; i++) {
  if (i % 2 === 0) console.log(`${i} is Even`);
  else console.log(`${i} is Odd`);
}

// count how many numbers from 1 to 100 are divisible by both 3 and 5

let divv = 0;
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    divv = divv + 1;
  }
}
console.log(`There are ${divv} numbers which are divisible by both`);

//
for (let i = 1; i < 101; i++) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
}

//
//
for (let i = 1; i < 21; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

// print first 5 odd number only...
let count = 0;
for (let i = 1; i < 101; i++) {
  if (i % 2 === 1) {
    count++;
    console.log(i);
  }
  if (count === 5) break;
}

// ye ye karega k aik number mein kitnay digits hain...
let numy = prompt("Enter your number");
let county = 0;

while (numy > 0) {
  county++;
  numy = Math.floor(numy / 10);
}
console.log(county);
