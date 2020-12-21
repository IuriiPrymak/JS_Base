/* 
    1. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. [forEach]        
    var arr = [5, 6, 7, 8, 9];
*/

var newArr = [];

var arr = [5, 6, 7, 8, 9];

arr.forEach(function(item){
    newArr.push(item * item);
})

console.log(newArr);