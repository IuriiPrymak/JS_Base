/* 
   2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
*/

function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

var x = prompt("Введите число", '');
var n = prompt("Введите степень", '');

if (n < 1) {
    document.write(`Степень ${n} не поддерживается`);
} else {
    document.write('Результат: ', pow(x, n));
}