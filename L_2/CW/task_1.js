/* 
        Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
        1, если значение больше нуля,
        -1, если значение меньше нуля,
        0, если значение равно нулю.
        Предполагается, что пользователь вводит только числа.
*/

var userNumber = prompt('Введите число');

if (userNumber > 0) {
    alert(1);
} else if (userNumber < 0) {
    alert(-1);
} else {
    alert(0);
}