/*
Functions...

there are different ways of writing functions one is simple given below.
function dance() {
  console.log("Dancing...");
}

second one:
let funny = function(){}
tu iss mein hm nay variable banaya orr uss ko function bana diyaa
orr uss function ko name nai diyaa qk jo variable ka name haii wohiii function ka name hoga.
tu ab agar hm iss ko call karna chahtay hain tu uss variable k name say uss ko call karengay
like
funny(); tu ye call ho jaye ga.



Function Declarations:

function dancy(){}  agar hm iss tarah function banayeingay tu iss ko (function statement) kahengay
let abb = function(){} agar mein function ko kisi variable mein save kar lun tu uss ko
                        hm (function expression) kahtay hain...
Fat Arrow Function:  let name = ()=>{}  (this is called fat arrow function)


Parameters:
kahin b jab hm functions banatay hain or agar un mein bracket mein hm
agar kuch valued dey dey tu un ko parameters kahtay hain jaisay k hm
nay addition walay function mein likhay hain... like
function add(v1,v2){} here v1 and v2 are parameters.
when we call it like
add(1,3);  here 1 and 3 are arguments.


Default,Rest and Spread Parameter:

function add(a1,a2){
    console.log(a1 + a2);
}

add();
tu hm nay ooper function mein parameter maangay hain magar jab hm nay function
ko call kiyaa hai tu yahan prr hm hm nay koii argument nai diyaaa...
tu ab in mein jab hm nay koii value nahi bhejiiii tu ye ab khud say undefined
le lega... tu jab ye undefined le lega.. tu for eg hm nay aik function banaya haii
jiss mein hm 2 numbers ko add kar rahay hain, magar hum nay arguments mein koii 
value dii hiii nai tu ye undefined le lega tu jab ye values ko add karay ga tu ye 
undefined iss mein hogii tu ye humein aik error dega NaN jiss ka matlab hai k not a number
matlab k aap nay 2 values dii hain jo k undefined hain matlab k NaN hain jo add ho hi nai
saktiii... 

tu ab iss say bachnay k liyee hm default parameter ka use krtay hain k matlab
hm pahlay say hii parameter ko value dey detay hain jaisay k 
function add(v1=0, v2=0){}
tu matlab k agar v1 mein hm nay koii value nai dii tu ye by default 0 value lelega
undefined nahi lega qk hmnay bydefault 0 value dii hai...
ye value hm kuch b rakh sktay hain jaisay hum chahein...
so this is called Default Parameters.


 
Pure and Impure functions:

Closures and Lexicals :


*/

function dance() {
  console.log("Dancing...");
}

dance();

console.log("check...");

let funny = function () {
  console.log("funny function...");
};

console.log("last.");

let name = () => {
  console.log("name function");
};

function animaldance(animal) {
  console.log(`${animal} Dance Kar Raha Hai`);
}

animaldance("cow");

function additions(num1, num2) {
  console.log(num1 + num2);
}
additions(40, 20);

function abcd(...val) {
  console.log(val);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9);

function onee(a, b, c, ...val) {
  console.log(a, b, c, val);
}
onee(1, 2, 3, 758, 8, 8239, 27);

// Higher_Order_Functions:

/*
wo function jo ya apnay parameter mein another funciton ko accept karay
ya phirr koii orr function ko return karay tub hm uss ko kahengay higher order
function. in conditions mein agar koii aik b poori ho tu wo higher order function kahlaye ga.

*/

function hof(val) {} //=>  this is called higher order function...
//=> ye neechay wala nai ye wala kahlaye ga hof

hof(function () {});

/*
tu jaisa k hm dheik sakty hain k hm nay function call ki orr uss k argument mein
hm nay another function ko pass kiyaa tu ab ye higher order function kahlaye ga.
*/

//

function hofy() {
  return function () {
    console.log("Hofy Higher Order Function");
  };
}

hofy()();

//
// pure function becasue it is not changing any value outside the function.
let aaa = 10;
function hofy2() {
  console.log("hofy 2");
}

//
// this is impure function because if we see when this function run it will
// increment the value of bb to 11 from 10 so it change the value outside from the
// function to this is impure function.
let bb = 10;
function hofy3() {
  bb++;
}

// this is Closures
function hhhh() {
  let aby = 10;
  return function () {
    console.log(aby);
  };
}

//
// Lexical Scoping.. :

function abcdef() {
  let age = 5;
  function ghij() {
    let birth = 10;
    function klmn() {
      let sallary = 100;
    }
  }
}

//
// IIFE(immediate invoked function expression)

(function () {
  console.log("immediately invokd.....");
})();

//  this is called IIFE

(function () {
  console.log("immmediate.... invocked...");
})();

//
//
// this is called hoisting...
hoistcheck();

function hoistcheck() {
  console.log("hoist check...");
}

//
//
// hoisting doesn't work in function expression. this will give error when we run it
// like...

functinoexxxx();

let functinoexxxx = function functionexpression() {
  console.log("functional expression check...");
};
//  tu agar hm nay iss ko yahan call kiyaa iss tarah tu ye error dega..

//
//
// early return function...
function greetuser(name) {
  if (!name) {
    return;
  }
  console.log(`Hello ${name}`);
}

greetuser();
