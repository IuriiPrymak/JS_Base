/* 
    4. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля. [every]
    var arr = [5, 6, 7, 8, 9];
*/

var arr = [5, 6, 7, 8, 9];

var isBiggerThanZero = arr.every(function(item) {
    return item > 0;
});

console.log(isBiggerThanZero);