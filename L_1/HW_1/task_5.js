/* 
    5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?". Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.
*/

var userAge = prompt('Введите Ваш возраст');

var ifAgeIsCorrect = confirm('Ваш возраст ' + userAge + ' лет?');

alert(ifAgeIsCorrect);