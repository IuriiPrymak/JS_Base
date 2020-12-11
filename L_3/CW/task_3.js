/*
    3. Напишите функцию которая бы переворачивала предоставленную строку
    Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его.
    Ваш результат должен быть строкой.
    "something"
*/

var string = 'something';

// 1. ---

// function reverseString(str) {
//     var arrFromStr = str.split('');
//     var reversedArr = arrFromStr.reverse();
//     var reversedStr = reversedArr.join('');
//     return reversedStr;
// }

// 2. ---

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// 3. ---

const reverseString = (str) => str.split('').reverse().join('');

var result = reverseString(string);
console.log(result);