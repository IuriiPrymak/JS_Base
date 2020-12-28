/* 
    1. Напишите функцию, которая принимает массив в качестве аргумента. Используя slice (), извлеките информацию из массива 
    аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

    ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']
*/

function getItems(arr) {
    return arr.slice(2, 4);
}

var arr = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];

var res = getItems(arr);
console.log(res);