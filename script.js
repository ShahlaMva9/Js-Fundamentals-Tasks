/**Task 1 */
// let number = prompt("Edəd daxil edin: ");
// console.log(Math.trunc(number / 10) % 10);

/**Task 2 */

// let number = prompt("Edəd daxil edin: ");
// console.log(number[Math.ceil(number.length / 2) - 1]);

/**Task 3 */

// let number = prompt("Edəd daxil edin: ");
// console.log(Math.trunc(number / 10));

/**Task 4 */

// let number = prompt("Edəd daxil edin: ");

// let num = number;
// let lenght = 0;
// while (num > 0) {
//   lenght++;
//   num = parseInt(num / 10);
// }

// let result = number % 10 ** (lenght - 1);
// console.log(result);

/**Task 5 */

// let number = prompt("Edəd daxil edin: ");
// if (number % 3 == 0 && number % 5 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/**Task 6 */

// let number = prompt("Edəd daxil edin: ");
// let check6num = false;
// for (let i = 0; i < number.length; i++) {
//   if (number[i] == 6) {
//     check6num = true;
//   }
// }
// console.log(check6num);

/**Task 7 */

// let number = prompt("Edəd daxil edin: ");
// if (number % 11 != 0) {
//   number = 11 - (number % 11) + Number(number);
//   console.log(number);
// } else {
//   console.log("Ədəd 11-ə bölünür");
// }

/**Task 8 */

// let number = prompt("Edəd daxil edin: ");
// let sub = prompt();
// console.log(number ** sub);

/**Task 9 */

// let number = prompt("Edəd daxil edin: ");
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   sum += Number(number[i]);
// }
// console.log(sum);

//10
// let number = prompt("Edəd daxil edin: ");
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum += Number(number[i]);
// }
// console.log(sum);

//11

//12
// let number = prompt("Edəd daxil edin: ");

// let last = number % 10;
// let othernum = "" + last;
// let num = number;
// for (let i = 1; i < number.length; i++) {
//   num = Math.trunc(num / 10);
//   othernum += num % 10;
// }

// console.log(othernum);

//13
// let a = prompt();
// let b = prompt();
// let c = prompt();
// let volume = a * b * c;
// console.log(volume);

//14
// let number = prompt("Edəd daxil edin: ");
// let result = "";

// for (let i = 0; i < number.length; i++) {
//   if (i % 2 != 0) {
//     result += number[i];
//   }
// }

// console.log(result);

//15
// let number = prompt("Edəd daxil edin: ");

// if (number > 0) {
//   console.log("1");
// } else if (number < 0) {
//   console.log("-1");
// } else {
//   console.log("0");
// }

//16
// let number = prompt("");
// let hundred, fifty, twenty, ten, five, one, lastnumber;

// hundred = Math.trunc(number / 100);
// fifty = Math.trunc((number - hundred * 100) / 50);
// twenty = Math.trunc((number - (hundred * 100 + fifty * 50)) / 20);
// ten = Math.trunc((number - (hundred * 100 + fifty * 50 + twenty * 20)) / 10);
// five = Math.trunc(
//   (number - (hundred * 100 + fifty * 50 + twenty * 20 + ten * 10)) / 5
// );
// lastnumber = number - (hundred * 100 + fifty * 50 + twenty * 20 + ten * 10);
// console.log(lastnumber);
// five == 1 ? (one = lastnumber - 5) : (one = lastnumber);

// const text = `Give the${hundred == 0 ? "" : " " + hundred + "-100$;"}${
//   fifty == 0 ? "" : fifty + "-50$;"
// }${twenty == 0 ? "" : twenty + "-20$;"}${ten == 0 ? "" : ten + " -10$;"}${
//   five == 0 ? "" : five + "-5$;"
// }${one == 0 ? "" : one + "-1$"}`;
// console.log(text);

//17
// let number = prompt("Edəd daxil edin: ");
// let first = Math.trunc(number / 100);
// let second = Math.trunc(number / 10) % 10;
// let last = number % 10;
// let min = Math.min(first, second, last);
// let max = Math.max(first, last, second);
// let middlenum = first + second + last - (min + max);
// let newNum = "" + min + middlenum + max;
// console.log(newNum);

//18
// let number = prompt("Edəd daxil edin: ");
// let simplenum = true;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0 && number / i !== 1) {
//     simplenum = false;
//   }
// }
// console.log(simplenum);

//19
// let number = prompt("Edəd daxil edin: ");
// let cubicnum = Math.trunc(Math.cbrt(number)) ** 3;
// console.log(cubicnum);

//20
// let mouths = prompt();

// switch (mouths) {
//   case 1:
//     console.log("January");
//     break;

//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   default:
//     console.log("1-12 rəqəm intervalinda ədəd daxil edin");
//     break;
// }

//21

function numberLenght(number) {
  let num = number;
  let lenght = 0;
  while (num > 0) {
    lenght++;
    num = parseInt(num / 10);
  }
  return lenght;
}
// console.log(numberLenght(12345));

//22

// let sayHi = function (name = "qonaq") {
//   return `Salam ${name} !`;
// };
// console.log(sayHi());

//23
// function palidormNum(number) {
//   let numberL = numberLenght(number);
//   let tNum;
//   let reverseN = "";
//   let isPalindorm = false;
//   for (let i = 1; i <= numberL; i++) {
//     tNum = Math.trunc((number % 10 ** i) / 10 ** (i - 1));
//     reverseN += tNum;
//   }

//   return reverseN == number ? (isPalindorm = true) : (isPalindorm = false);
// }
// console.log(palidormNum(417));
// palidormNum(414);

//24
// let difNum = (number) => {
//   let first = Math.trunc(number / 100);
//   let second = Math.trunc(number / 10) % 10;
//   let third = number % 10;
//   if (first == second || first == third || second == third) {
//     return "Eyni reqemler var";
//   } else {
//     return "Ferqli reqemlerdir";
//   }
// };

// console.log(difNum(128));

// 25

// let divideTen = (number) => Math.trunc(number / 10) * 10;

// console.log(divideTen(23));

//26
// let multiply = (n, m = 2) => n ** m;
// console.log(multiply(2));

//27
// function findN(number, n) {
//   let numberL = numberLenght(number);
//   let nNum;
//   if (numberL >= n) {
//     nNum = Math.trunc(Math.trunc(number % 10 ** n) / 10 ** (n - 1));
//     return nNum;
//   } else {
//     return "N rəqəmin uzunluğundan böyükdür";
//   }
// }

// console.log(findN(12345, 15));
//28
// function simpleNum(number) {
//   let simple = true;
//   if (number == 1) {
//     return "Sade ve ya murekkeb ede deyil";
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       simple = false;
//     }
//   }
//   return simple;
// }

// console.log(simpleNum(12));

//29
// let findOddNum = function (number) {
//   let smallOddNumCount = 0;

//   for (let i = 1; i < Math.abs(number); i++) {
//     if (i % 2 == 1) {
//       smallOddNumCount++;
//     }
//   }

//   return smallOddNumCount;
// };

// console.log(findOddNum(-7));

//30

// function lowCountM(number) {
//   let hundred = Math.trunc(number / 100);
//   number -= hundred * 100;
//   let fifty = Math.trunc(number / 50);
//   number -= fifty * 50;
//   let twenty = Math.trunc(number / 20);
//   number -= twenty * 20;
//   let ten = Math.trunc(number / 10);
//   number -= ten * 10;
//   let five = Math.trunc(number / 5);
//   number -= five * 5;
//   let text = `${!hundred ? "" : hundred + "-100"} ${
//     !fifty ? "" : fifty + "-50"
//   } ${!twenty ? "" : twenty + "-20"} ${!ten ? "" : ten + "-10"} ${
//     !five ? "" : five + "-5"
//   } ${!number ? "" : number + "-1"}`;
//   return text;
// }

// console.log(lowCountM(285));
