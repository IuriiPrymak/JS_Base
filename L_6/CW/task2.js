/* 
    2. Дан массив с числами. Найдите сумму этих чисел [forEach]
    var arr = [5, 6, 7, 8, 9];
*/

var arr = [5, 6, 7, 8, 9];

var sum = 0;

arr.forEach(function(item) {
    sum += item;
});

console.log(sum);

