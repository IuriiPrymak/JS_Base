/* 
    Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.
*/

var a = +prompt('Пожалуйста, введите первое число');
var b = +prompt('Пожалуйста, введите второе число');
var c = +prompt('Пожалуйста, введите третье число');

if (a != c && a != b && c != b) {
    console.log((a + b + c) / 3)
} else {
   alert('error')
}