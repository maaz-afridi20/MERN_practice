console.log("data type");

/*
mainly there are two categories of datatypes 
1) premitives (string,number,bolean,bigint,null,undefined,symbol)
2) references (arrays,object,functions)


premitives wo hotay hain jiss mein hm koii bracket ko use nai krtay like
name = "ali", tu jaisay k hm nay iss mein koiii b bracket use nai kiyaa
age=99; 
dead = True
jiss k sath koii bracket etc use na ho un ko premitives kahtay hain.

References wo hotay hain jiss mein brackets ka use hota hai jaisa k hm use krtay hain
arrays mein [], and iss tarah k orr b kuch. 
tu iss tarah k variables ko references values k variables kahtay hain
tu bss jiss k sth brackets use hon jin variable k sth uss ko references kahtay hain

premitives aisay saray variables values ko kahtay hain jin ko copy karnay par humein aik
real copy mill jaye ga.

reference aisay saray variables values ko kahtay hain jin ko copy karnay par humein real copy
nahi milegi par apko refernce milega parent ka.

jaisay for eg 
let a = 12;
let b = a;
tu agar hm yaha prr dhaikein tu a k pass apna 12 hai orr b k pass apna 12 hai
tu abb agar hm a mein changes karein tu b koi change nai hoga qk b k pass apna 12 hai
agar hm iss tarah likhein a = a+2;
orr iss ko print karein tu a ki value  14 huee hogi magar 
agar isse time hm b ki value koo print karein tu b ki value wohi 12 hogi qk hm nay siraf 
a ki value tu diii huee haii magar bss wo ab b ko assign ho gayee tu ab aagr 
a mein koi change hoga tu b ki value wohi hogi qk uss mein tu hm nay koi change nai kiyaa...

tu agar humara variable koiii b premitive haii tu hm uss ko copy kr sktay hain directly

orr jo reference type ki variable hoti haii hm uss ko directly copy nai kr sktay jaisay k for eg
let bbb = [4,24,38,72];
let ccc = bbb;
tu ab lagta hai k copy ho gya hoga magar copy naii hota 
siraf ccc jo haiii wo bbb ki value ko siraf hold karta hai

matlab k agar mein aaa ki value mein koi change karunga tu wo bbb mein change aye gaa
orr agar mein bbb mei koi change karunga tu wo aaa mein b aye ga jaisay agar mein nay
koi value bbb say delete kr di tu aaa say b huee hogi...

uss ki value mein jabkay jo premitive data type thay uss mei aisa nai hota tha.
uss mein agar hm koi a ki value b ko assign karty thay tu bss wo dono ki alag alag 
values hain agar a mein changes ajaein tu b mein koi change nai aye gaa qk wo bss khud ki b
ki value hai 

*/

let aaa = [4, 291, 81, 1, 14];
let bbb = aaa;
// console.log(aaa);
// console.log(bbb);

console.log(aaa);
bbb.pop();
console.log(aaa);
console.log(bbb);

// Strings: (with three ways we can create string) ('', "", ``)
// Number: 23,52
// Boolean: True False
// Null : (null ka matlab k hm nay jan booj kr koi value nai di ya humein iss ki value)
//        (humein pata nai haii jo agay aa skti hai tu hm wahan prr null use kr sktay hain)
// Undefined : undefined ka matlab hai k hm nay aik variable banaya orr ussay value dii hi nai
//             tu jo value wo by default lega tu wo undefined lega.
// undefined humein milti hai orr null hm khud detay hain...
// Symbol : creates a unique immutable value
// BigInt:  kisi b variable ko value denay k liyee aik limit hoti hai value ki
// agar hm chahtay hain k bohat bari value haii uss limit say b zyada hai tu hm
// bigint ka use karengay...
// (Number.MAX_SAFEINTEGER) hm iss say pata laga sktay hain k konsa datatype
// kitna value ko safe kr skta hai

// tu agar humein bigint banana ho tu hm uss barii si value k sth hm last mein
// siraf n likh letay hain tu wo bigint mein change ho jati hai...
let aby = 9007199254740991n;
// tu ab ye big int ban gaya hai...
// ab agar humein for eg iss aby value mein koii cheez add krna haii tu humein
// uss mein b (n) ko likhnaa hoga like
// aby + 5n; tu ye 5 ko add krdega bigint mein

/*
kaye bar hm bahir ki libraries ko use kartay hain orr waisay hi changes hm kartay hain 
tu for eg uss library mein koi variable tha age,
orr hm nay waisay aik orr b variable banaya age ka tu ab ye wo doosray jo age tha uss ko override 
kar lega tu ye teek nai hai...
tu agar hm chahtay hain k hm koii cheez banayein jo k bilkul hii unique ho orr change
na ho tu hm symbol datatype ka use kr sktay hain

*/

let u1 = Symbol("ali");
let u2 = Symbol("ali");

/* 
ab ye humein tu same lag raha hoga magar ye agar hm print karein tu 
ye false dega k ye same naii hai...
console.log(u1 === u2);

matalb k symbol hm waha use kr sktay hain k jahan hm unique cheez ko chahein

*/

//      REFERENCE DATA TYPES...

/*
variable declare karnay k baad humein kahin prr b koi sa b bracket nazar
agaya tu humein samaj jana chahiyee k ye reference data type k variable hai

orr agar hm reference mein koiii change karengay tu wo humein 
laga k copy ho gya hai mein huaa nai hogaa, siraf reference hiii copy huaa hoga
matlab k agar mein nay a ko b mein copy kiyaa orr b say kuch delete kar liyaa
tu wo a say b delete ho jaye ga.

*/

let ara = [12, 42, 1, 48, 8]; // arrays...
let brb = ara;
console.log(brb);
brb.pop();
console.log(ara);

let objj = { namee: "ali", age: 12 }; // objs..
console.log(objj);
objj.namee = "alikhan";
console.log(objj);
