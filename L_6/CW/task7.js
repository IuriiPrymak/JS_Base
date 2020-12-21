/* 
    7. Дан массив с числами. Оставьте в нем только четные числа. [filter]
    var arr = [1, -3, 5, 6, -7, 8, 9, -11];
*/

var arr = [1, -3, 5, 6, -7, 8, 9, -11];

var evenNumbers = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(evenNumbers);

