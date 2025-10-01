/*
    DYNAMIC TYPING...
there is not static typing in javascript there is dynamic typing in the javascript
dynamic typing mean that we can change the data because ther is dynamic typing

in another languages we use like   int age = 12;
so we cannot do that in other languages like  age = "khan";
this will gives an error

while in java script we can do this because there is dynamic typing..
matlab k hm variable k sath int,bool,string etc ye cheezain nai likhtay
bss direct variable ko declare kar letay hain...  (just like python)..

in javascript we can do it like
let a = 12;
// a = true;
// a = "ali";
// a = []
and this will not give you any error. because there is dynamic typing inside javascript

*/

//   TYPE OF QUIRKS...

/*
hm kisi b value ka type check kr sktay hain k ye number hai ya 
string hai ya kuch or etc...
jiss k liyee hm typeOf ka keyword hai jiss ka use kartay hain hm...
typeof 12 


QUIRKS: uss ko kahtay hain jaisay matlab koii ghalti etc hai javascript mein like
agar typeof NaN likhein tu NaN ka matlab hai not a number magar agar hm typeof NaN
likhein tu ye humein number show karega jo k ghalat hai
agar hm  likhein  console.log(NaN===NaN) tu chahiyee tu  ye thaa k ye true deta
magar ye false deta hai jo k ghalat hai tu ye b aik quirk hai...
tu iss tarah k matlab hm bugs kah sktay hain.. in ko quirks kahtay hain
jo k bohat saray hain javascript mein
*/

console.log(typeof 12); // this will print number because 12 is a number.
console.log(typeof "ali");
