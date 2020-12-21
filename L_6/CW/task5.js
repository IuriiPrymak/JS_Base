/* 
    5. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.[some]
    var arr = [5, 6, -7, 8, 9];
*/

var arr = [5, 6, -7, 8, 9];

var isLessThanZero = arr.some(function(item) {
    return item < 0;
});

console.log(isLessThanZero);