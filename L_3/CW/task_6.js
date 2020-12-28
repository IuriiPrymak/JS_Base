/*
6. Используйте функцию .shift (), чтобы удалить первый элемент из myArray, присваивая удаленное значение для removeFromMyArray и 
выведите его в консоль.

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

// Setup
var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray;

*/

var myArray = [["John", 23], ["cat", 2]];
var removeFromMyArray;
removeFromMyArray = myArray.shift();
console.log(removeFromMyArray);