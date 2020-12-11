/* 
    4. Напишите функцию, которая возвращает n-е число Фибоначчи. Для решения используйте цикл.
*/


// function fibonacci(num){
//     var a = 1, b = 0, temp;

//     while (num >= 0){
//         temp = a;
//         a = a + b;
//         b = temp;
//         num--;
//     }

//     return b;
// }

// console.log(fibonacci(7));


function fibonacci(num) {
  var a = 1, b = 1;
  for (var i = 3; i <= num; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fibonacci(7));