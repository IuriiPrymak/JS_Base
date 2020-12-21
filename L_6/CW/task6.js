/* 
    6. Дан массив с числами. Оставьте в нем только отрицательные числа. [filter]
    var arr = [1, -3, 5, 6, -7, 8, 9, -11];
*/

var arr = [1, -3, 5, 6, -7, 8, 9, -11];

var negativeNumbers = arr.filter(function(item) {
    return item < 0;
});

console.log(negativeNumbers);
