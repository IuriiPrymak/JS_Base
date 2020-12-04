/* 
       
    Обменять значения двух переменных, используя третью (буферную) переменную.
         
*/

var a = 4;
var b = 8;
var c;

console.log('before exchange:');
console.log('a: ' + a, '| b: ' + b);

c = a;
a = b;
b = c;
console.log('after exchange:');
console.log('a: ' + a, '| b: ' + b);