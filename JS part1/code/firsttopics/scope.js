console.log("scope");

// Scope (global, block, functional)
// Reassign & ReDeclared

/*
scope ka matlab k aap ka daira kahan tuk haii simply..
k matlab wo varaible kahan tuk use ho skta hai
*/

var abc = 4892; // globally scoped

function name() {
  var bb = 23;
}

/*  
for eg hm nay agar koii variable function mein use kiyaa tu hm siraf uss ko 
function mein use kar payengay tu iss ko kahengay functional scoped

agar hm pooray global mein likhein orr uss ko hm globally use kar sakein tu
hm uss ko kahengay k ye globally scoped hai

tu agar hm koi b cheez { } k andar likhein tu ye blocked scoped hota hai
orrr jo var haii ye siraf functional scoped haii ye { } k andar use k andar use nai
hota haiii  qk iss mein hm nay kooiii function hii nai likhaa siraf { } hain

tu agar hm baat karein global scoped kii tu wo b humein dhikaii nai deta magar
wo b aik function mein likhaa hota hai sara code.

{ } = blocked scoped

jo let hota hai ye block scoped hota hai
agar hm variable let say banayein jiss b blocked mein 
tu ye variable usse block mein ho sktaaa haiii uss k bahir nai

bss let ki simple ye hai k jiss braces {} mein h use hoga ussee braces yani k 
usse brackets mein hii use ho sakega.

*/

function agy() {
  // let name = "khan";
  if (true) {
    let name = "khan";
  }
}

// ab ye wala jo name variable haii ye siraf if k andar hi use ho skta hai
// function mein b use nai ho sakega qk ye hm nay let say banaya haii or wo blocked scped
// jaisa k hm dhaik sktay hain k wo {} k andar hai tu wo siraf usse {} k andar use hoga.

// Reassign
// dobara wapis say value dena.

let jj = 23;
jj = 10; // reassigned

// ReDeclared
var abc = 48;
var abc = 59; // redeclared mein k hm nay keyword b sath mein likh liyaa
// and this is possible with var but not with let.

// let bbb = 100; this will give you an error.
// let bbb = 101;

// Temporal Dead Zone (TDZ)
/*
console.log(a);
tu agar hm iss ko aisa use karengay tu javascript humein error dega k ye 
variable a exist nai karta hai  qk hm nay kahin prr a declare hi nai kiyaa

agar hm aisa use karein 
console.log(a);
let a =12;

tu ye error kuchh orr dega jaisa k cannot access before initialization
matlab k baki coding languages mein agar hm print pahlay karein orr uss k baad mein
declare karein variable ko tu wo uss ko pata naii hota yani acceess kar pata orrr error 
de deta hai 
magar java script mein ye ye wala error deta hai k "cannot access before initialization"
matlab k javascript ko pata hai k ye variable iss k neechay kahi prr declare haii magar
abi iss ko access nai kar paraha.

var mein tdz nai hota let,and const mein hota hai

tu isse ko temporal dead zone kahtay hain k wo area jahan tk javascript ko pata hota hai
k ye variable exist karta hai  par wo apko value naiii de sakta.


let bbb = 39;  tu ab temporal dead zone yaha prr 
90 lines hain qk hm nay 91 mein variable bana liyaa haii iss say pahlay variable b
ye tdz haii variable bbb ka...
ki value nai thi tu ye tdz hai.


tu matlab k variable bbb say ooper jitna space haii to variable bbb ka tdz hai..
*/
