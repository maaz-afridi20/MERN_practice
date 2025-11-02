/*
NaN = ka matlab hai k not a number, magar agar hm iss ki typeof dhekein tu
ye humein number show karega... 
tu ye iss liye hota hai k NaN jo hai wo javascript mein aik failed operation
ki tarah treat kiyaa jata hai.. matlab k agar hm chahein k 2 ko 
"ali" k sath multiply kar do tu ye tu possible nai hai
tu uss time javascript kahtiii hai k ye NaN hai 
magar ye NaN ko iss liyee number treat krti hai k javascript kahti hai
k thaa tu ye number kaa hii operation maagr ye possible nai ho saka 
magar thaa ye number kaa hi operation matlab X,ya + etc iss tarh k
tu mein iss ko number type hi dy rahi hon. hoga tu ye NaN magar ye possible
na ho saka ye operation qk ye aik failed number operation haii...

tu jab b failed number operation hogaaa tu uss ka type number hoga javascript mein
*/

// Type Coersion (== vs ===)

/*
type coersion ka matlab hai k jisme aik ek type automatically dosray mein change
ho jati hai jaisay for eg
"5" + 1; 
baki languages mein humein ye error dega qk aik string hai or doosraa number hai
tu dono add nai ho sktay magar
java script mein ye possible hai orr wo TYPE CORESION k waja say

"5"+1; tu yaha par ye dono ko concatinate kar dega matlab
ye "51" aisa print karega.

ab baki log kahengay k ye "5" ko number q nai banaya tu uss ki reason hai
k javascript kahta hai k + k right ya left side prr agar aik operand b string
nikal aya tu ye jo + haii ye addition nai karega ye concatenate karay ga.




magar agar hm - likhein like   "5" - 1; tu ab ye qk + tu 2 kaam karta thaa
add k karthaa thaa or concatenate b karta thaa tu iss waja say aik side prr
javascript ko string dhikh gaya tu uss nay addition k bajaye concatenation
kar diii magar minus k time prr - tu siraf aik hii kaam karta hai tu ye jo jaavscript
haii ye 5 say 1 ko minus kar dega orr 4 ans ajaye gaa orr yee jo 5 string thaa
ye convert ho jaye gaa number mein 
*/

console.log("4" + 1);
console.log("4" - 1);

let a = "44";
let b = 5;
let c = a + b; // this will answer 445
console.log(c);
console.log(typeof c);

let d = "29";
let e = 1;
let f = d - e; // this will answer 28
console.log(f);
console.log(typeof f);

//          TRUTHY AND FALSY...

/*
hm conditional statement banatay hain tu hm uss mein koii value detay hain
tu ab javascript walo ko pata tha k ye kuch b de skta hai tu uss nay
in saro values ko truty and falsy values mein divide kar diya hai 
jaisay k for eg agar hm nay koii if statement banaya orr uss mein siraf 
khaali ye cheezain likh dii orr kuch naii likhaaa tu ye false consider hoga 
orr wo cheezain ye hain.. 
0, false, "", NaN, Undefined, Null, Document.all

agar humein nai pata k ye falsy value hogi ya truthy tu hm ye trick perform kar
sktay hain k uss cheez k aagay  !! ye laga dein orr print kar dein tu 
ye humein kah dega k ye truthy value mein change hoga ya falsy
like console.log(!!NaN); console.log(!!Number); console.log(!!Undefined);
console.log(!!"");

jaisay for eg
if(null){

}
tu ab hm nay condition mein kuch b naii likha magar yaha prr kuch aana zaroori haii
tu iss condition mein javascript jo hai wo iss ki nature dhekegay gii
k falsy hai ya truthy hai tu agar ooper ki cheezon mein kuch b huaa tu wo falsy consider
hoga. jaisay k hm nay ooper null likhaa haii tu ab javascript khud iss ko falsy nature
consider kar legi... k ye condition false hai ye false mein khud change ho jaye gi

iss k ilawa baki sab truthy hai jo b values hain jaisay k
if(-1){
}  tu ab ye value truthy hai true mein convert ho jaye gi..
*/
console.log("check");

console.log(!!NaN);
