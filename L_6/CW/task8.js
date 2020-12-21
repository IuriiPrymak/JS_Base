/* 
    8. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. [filter]
    var arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
*/

var arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

var newArr = arr.filter(function(item) {
    return item.length < 5;
});

console.log(newArr);

