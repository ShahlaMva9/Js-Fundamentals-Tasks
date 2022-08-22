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
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  isdriverLicence: false,
};
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [2, 3, 0, 3, 5, 6, 6, 3, 0, 2, 3, 1, 1];
//31

// function objectKeys(obj) {
//   return Object.keys(obj);
// }
// console.log(objectKeys(person));

//32

// const objClone = function (obj) {
//   return { ...obj };
// };
// console.log(objClone(person));

//33

// const strKeys = (obj) => {
//   const entries = Object.entries(obj);
//   const strkey = [];

//   for (let i = 0; i < entries.length; i++) {
//     if (typeof entries[i][1] == "string") {
//       strkey.push(entries[i][0]);
//     }
//   }
//   return strkey;
// };
// console.log(strKeys(person));

//34
// function createObj(name, surname) {
//   const newObj = {
//     name: name,
//     surname: surname,
//   };
//   return newObj;
// }
// console.log(createObj("Shahla", "Mammadova"));

//35

// function deleteKey(obj, key) {
//   delete obj[key];
//   return obj;
// }
// console.log(deleteKey(person, "age"));

//36

// const objLenght = (obj) => Object.entries(obj).length;
// console.log(objLenght(person));

//37
// function hasOwn(obj, key) {
//   const keys = Object.keys(obj);
//   let hasOwnProp = false;
//   for (let i = 0; i < keys.length; i++) {
//     if (keys[i] == key) {
//       hasOwnProp = true;
//     }
//   }
//   return hasOwnProp;
// }
// console.log(hasOwn(person, "agew"));

//38

// const lastElem = (arr) => {
//   return arr[arr.length - 1];
// };
// console.log(lastElem(fruits));

//39
// const cloneArr = (arr) => [...arr];
// console.log(cloneArr(fruits));

//40
// const showN = (arr, n) => {
//   const newArr = [];

//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[i]);
//   }

//   return newArr;
// };
// console.log(showN(fruits, 2));

//41

// const showLastN = (arr, n) => {
//   const reverseArr = arr.reverse();
//   const newArr = [];

//   for (let i = 0; i < n; i++) {
//     newArr.push(reverseArr[i]);
//   }
//   return newArr;
// };
// console.log(showLastN(fruits, 2));

//42
// const divideArr = (arr) => {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + ",";
//   }
//   return str;
// };
// divideArr(fruits);

//43
const arr = [7, 2, 3, 2, 3, 2, 2, 7, 7, 7, 6, 7, 7, 7, 7, 2, 2, 2, 2, 2];

function findMostUsingElem(arr) {
  const obj = {};
  let maxelem;
  // add obj keys
  arr.forEach((el) => {
    obj[el] = 0;
  });

  //add obj values
  arr.forEach((el, i) => {
    if (!Object.keys(obj).includes(el)) {
      obj[el]++;
    }
  });
  //find max value
  maxelem = Math.max(...Object.values(obj));

  //find max key

  const findElemIndex = Object.values(obj).findIndex((el) => el == maxelem);
  const findElem = Object.entries(obj)[findElemIndex][0];
  return findElem;
}

console.log(findMostUsingElem(arr));
// console.log(Object.keys(obj));

// console.log(saas);
//44
// function deleteOddNum(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 != 0) {
//       return arr[i];
//     }
//   }
// }
// deleteOddNum(fruits);

//45

// function deleteN(arr, n = 1) {
//   arr.splice(n + 1);
//   return arr;
// }
// console.log(deleteN(fruits, 1));
// console.log(objLenght(person));
// console.log(lowCountM(285));
// class Human {
//   constructor() {
//     this.gender = "male";
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }

//46
// numbers.forEach((el) => {
//   console.log(el);
// });

//47
// const joinArr = fruits.reduce((prew, curr) => {
//   return prew + curr;
// });
// console.log(joinArr);

//48
// const multiply = numbers.reduce((prev, curr) =>
//   curr != 0 ? prev * curr : prev
// );
// console.log(multiply);

//49
// const arr = [-100, -99, 3, 7, -98, 0, 1, 2];
// const newArr = arr.map((el) => Math.abs(el));
// console.log(newArr);
//50
// arr.sort((a, b) => a - b);
// console.log(arr);
//51 50 ile eyni
//52
// const newArrarr = arr.filter((el) => el > 0);
// console.log(newArrarr);
//53
// const uniqueArr = [];
// const newArr = numbers.forEach((el) => {
//   if (!uniqueArr.includes(el)) {
//     uniqueArr.push(el);
//   }
// });

// console.log(uniqueArr);
//54
// const users = [
//   {
//     fullName: "Jenny",
//     age: 30,
//     gender: "female",
//   },
//   {
//     fullName: "Steve JObs",
//     age: 18,
//     gender: "male",
//   },

//   {
//     fullName: "Mark Zum",
//     age: 40,
//     gender: "male",
//   },
// ];
//54
// const usersName = users.map((el) => el.fullName);
// console.log(usersName);
//55

// const maleGender = users.filter((el) => {
//   return el.gender == "male";
// });
// //56
// const femaleGender = users.filter((el) => {
//   return el.gender == "female";
// });
// console.log(femaleGender);
//57
// const smth = users.filter((el) => el.age > 20);
// console.log(smth);
//57
// const newArr = users.sort((a, b) => a.age - b.age);
// console.log(newArr);
