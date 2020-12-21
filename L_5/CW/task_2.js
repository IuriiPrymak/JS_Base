/* 
        2. Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, 
        который проходит проверку на истинность (второй аргумент). Если ни один элемент не проходит тест, вернуть undefined.

        function findElement(arr, func) {
            var test = 0;
            if(func(test)){
                return test;
            }
            return num;
        }

        findElement([1, 2, 3, 4], function(num) {return num % 2 === 0} );
*/

function findElement(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])){
            return arr[i];
        }
    }
    
    return undefined;
}

console.log(findElement([1, 2, 3, 4], function(num) {return num % 2 === 0} ));