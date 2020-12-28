/* 
2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
*/

var array=['Element 1','Element 2','Element 3','Element 4'];
var element;

element = prompt('Введите номер элемента, после которого Вы хотите вставить новый элемент. \nЕсть следующие элементы массива:\n' + array.join('\n') );
array.splice(element, 0, 'NewArrayElement');
console.log(array);