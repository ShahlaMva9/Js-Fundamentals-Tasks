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
