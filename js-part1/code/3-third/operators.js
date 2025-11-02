/*
     ALL   OPERATORS...

+, -, *, /, %, **, 
=, ==, ===
<, >, <=, =>, !, !!, !=, !==
&& || ?:




ARITHMETIC OPERATORS...
+   for addition, concatenation
-   for subtraction
*   for multiplication
/   for divide
**  for exponentials (matlab power 2**3 tu ye ans dega 8)
%   (modulus) it gives remainder like  12%5 this will give 2
                because dividing 12 with 5 will give you 2 remainder




COMPARISON OPERATORS :

=   kisi cheez mein value dalna. like age=12;
==  ye 2 things ko check krtay hain k barabar hain k nai
    like 2 == 3 tu ye false dega.
    magar iss k sth problem hai k ye ye check nai krta haik
    agar hm aisa b likhein 2 == "2" ye true de dega jo k correct nai hai
    qk aik string hai orr dosra number
    tu ye poblem hai == k sth k ye type ko properly check nai krta hai
    tu iss problem ko fix krta hai === jo k type b check krta hai for eg
    2 === "2" tu iss ka ans dega false.
===
!=  12 != 13 this will give true qk 12 barabar nai hai 13 k
!== ye b work krta hai === ki tarah bss aik = ki jagah ! agaya hai..
    matlab k ye ab === ki tarah type b check karega... like
    10 !== "10"  this will give true.
>=  greater and equal
<=  lesser and equal
>   greater
<   less


        ASSIGNMENT OPERATORS...
=   a=10;
+=  a+=5; matlab k A ki value mein pahlay 5 add karo orr phir update kr do..
    tu yaha prr a ki value hogi 15
-=  a-=5; matlab pahlay a ki value say 5 minus karo or phir value update kr do
    tu yaha pr a ki value hogi 5
/=  pahlay divide karo phir uss mein dal do like
    a/=2  matlab pahlay a ki value ko 2 sy divide karo orr phir
    a mein daal do...
*=  matlab pahlay a ki value ko * karo or phir update kr lo like
    a *= 2;  tu jo b value hogi A mein uss ko pahlay 2 say multiply 
    karo phir A mein dal do.
%=  matlab k jo b value chal rai hai uss ka pahlay modulus nikalo
    orr phir uss ko dal do uss variable mein like
    a%=5; matlab a ki jo b value ho pahlay uss ko divide karo 3 say
    uss ka jo b modulus ho uss mein a mein dal do.


     LOGICAL OPERATORS: 
&&(and operator)  ye tub true hoga agar dono hi conditions true ho
    true && true => true
    false && true => false
    true && false => false
    false && false => false
||(or operator)  iss mein agar aik b condition true hogi tu ye true hoga.
                 true || false => true
                 false || true => true
                 true || true => true
                 false || false => false




!false => ye true hojaye ga. qk jiss cheez k samnay b hm ! laga dein 
tu ye uss ko opposite kar lega. like agar hum likhein k !true tu true ka opposite
false hai tu humein false dega

!true => false.


====>>>   UNARY OPERATORS :
wo operators jo siraf single values par chalta ho like
+, -, !, typeof, ++, -- 

++     -->> is ka matlab hai k aik value barhaa do directly
        let a = 10;
        ++a;
        tu ab a ki value hogi 11

        agar hm koi variable say pahlay ++ laga lein tu iss ka matlab hai
        pre increment tu iss ka matlab hai k 
        ++a  pahlay a ki value barha do orr phir print kar do

        orr agar hm koii variable k baad ++ laga lein tu iss ka matlba hai k 
        post increment tu  iss ka matlab hai a++ tu ab ye ye karay giii
        k pahlay jo b hai a ki value wo print kr degii orr phir increment kar degi

--      same concept works with this just like ++ but it will be only minus.

*/

let a = 10;
++a; // this will print 11

let b = 10;
b++; // this will print 10 because we have printed first the value of b
//   then we incremented the value so this is post increment.
// now after this if we print the value then it will be incremented to 11

//      TERNARY OPERATORS :
/*
? :  agar hm eg lein  k    12 > 13 ? console.log("false") : console.log("pata nai")
     agar condition true huee tu first wali cheez chalay gii agar nai tu : k baad
     wala code chalega...
*/
