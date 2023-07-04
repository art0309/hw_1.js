// HomeWork_1

//  ----------------------- 1
// define values a & b
const a = 14;
const b = 5;

const sum = a + b;
const differ = a - b;
const product = a * b;
const quotient = a / b;
const remainder = a % b;
console.log("a + b:", sum);
console.log("a - b:", differ);
console.log("a * b:", product);
console.log("a / b:", quotient);
console.log("a % b:", remainder);

const x = 99;
const y = 11;

const sum1 = x + y;
const differ1 = x - y;
const product1 = x * y;
const quotient1 = x / y;
const remainder1 = x % y;
console.log("x + y:", sum1);
console.log("x - y:", differ1);
console.log("x * y:", product1);
console.log("x / y:", quotient1);
console.log("x % y:", remainder1);

// Davit not sure if this is what you need, as I have to change the name of variables every time? That's why I didn't finish the last Input(81,16).

//  ----------------------- 2
// print the output

console.log(`My name is Artur, I am 46 years old.`);
//
const firstName = "Artur";
const age = 46;
console.log(`My name is ${firstName}, I am ${age} years old.`);
//
console.log("My name is " + firstName + ", I am " + age + "years old.");

//  ----------------------- 3
//print the last digit

const xx = 78756;
console.log(xx % 10);

const xxx = -122;
console.log(xxx % 10);

const xxxx = 8;
console.log(xxxx % 10);

const xxxxx = 0;
console.log(xxxxx % 10);

//  ----------------------- 4
// check if the given number is negative, print "yes" if it is negative
const zero = 0;

if (!zero) {
  console.log(zero, "not negative");
} else {
  console.log(zero, "yes");
}
//
if (zero == true) {
  console.log("yes");
} else {
  console.log("no");
}
//
const v = !zero ? "no" : "yes";
console.log(v);
//
const f = zero || "no";
console.log(f);
//
const ff = !zero && "no";
console.log(ff);

////
const neg71 = -71;
if (neg71) {
  console.log("yes");
} else {
  console.log("no");
}
//
neg71 ? console.log("yes") : console.log("no");

////
const _89 = 89;
_89 ? console.log("no") : console.log("yes");

//  ----------------------- 5
// add digits of a number
// 306, 912, 505

const _306 = 306;
const str = _306 + "";
const strSum = +str[0] + +str[1] + +str[2];
console.log(strSum);

const _912 = 912;
const str1 = "" + _912;
const strSum1 = +str1[0] + +str1[1] + +str1[2];
console.log(strSum1);

const _505 = 505;
const str2 = _505 + "";
const strSum2 = +str2[0] + +str2[1] + +str2[2];
console.log(strSum2);
