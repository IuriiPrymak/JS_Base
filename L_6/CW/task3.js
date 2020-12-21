/* 
    3. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. [map]
    var arr = [5, 6, 7, 8, 9];
*/

var arr = [5, 6, 7, 8, 9];

var newArr = arr.map(function(item) {
    return item * item;
});

console.log(newArr);

