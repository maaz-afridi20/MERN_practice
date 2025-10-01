// var a = undefined;
console.log("hoising impact pertype");

/*
Hoisiting : jab b hm koi variable javascript mein banatay hain tu uss ka 
variable 2 hisso mein toot jata hai, uss ka declare part oper chala jata hai
orr jo uss ka initialization part hota hai wo neechay rah jata hai

*/

var a = 10;

/*
tu for eg hm nay ye aik variable banaya haii tu ye jo hm nay nay variable 
banaya hai to 2 parts mein divide ho jaye ga.

uss ka jo declaration part hai wo top par chala jaye ga 
orr jo initialization part hai wo neechay hiii rah jaye ga. matlab k 


console.log(a);


var a = 111;
tu ab ye humein error dega undefined. because hm nay variable ko declare kiyaa hai
console.log k neechay magar phirr b javascript ko pata hai k ye ooper tu nai haii maagr
kahi prr neechay ye declared haii tu siraf undefined error de diyaa...
tu wo iss ko iss liye pata chal gya k 
wo system nay iss variable ko 2 parts mein divide kr diyaa thaa
wo iss tarah k

var a = undefined;

a = 111;


tu ye jo declared part thaa wo tu system nay ooper bhej diyaa tha
tu wo pahlay say hi system ko pata chal gaya thaa k yahan prr kuch variable haii
a name say magar wo undefined haiii tu iss liyee uss nay undefined ka error diyaa 
tu behind the scene kuch iss tarh work karta haii ye...

so this is called (Hoisiting)...



so tu ye jo hoisting haii ye saray teeno mein hoti hai jaisay var,let,const
qk agar hm let ki eg lein tu iss mei humein deta haii k initialization say pahlay value
ko access nai kr sktay..
tu agar hm iss pr sochein tu humein ye soch milti hai k iiss nay let k variable ki hoisting
kii hogi tu isse liyee tu ye humein ye error de raha hai k pahlay iss variable ko initialize karo
phirr uss ko access karo tu matlab k let b hoist hota hai.

console.log(ap);

let ap = 58;

magar agar hm iss ko behind the scene dhekein tu ye 
iss tarah huaa hoga 
let ap = undefined;
ap = 58;

orr ye jo undefined ka part thaa wo sab say ooper chala gaya hoga.

tu hum nay seekhaa k 

var -> hoist -> Undefined
let -> hoist -> X
const -> hoist -> X

var b hoist hota hai orr iss ki value hoist mein hoti hai Undefined
let b hoist hota hai orr iss ki value hoist kuch set nai hoti
const b hoist hota hai orr iss ki b koii value set nai hoti hoisting mein

*/

let age = 19;

{
  let age = 50;
  console.log("inside : ", age);
}

console.log("Outside:", age);
