/*
        5. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/

function isEmpty(obj) {
        // return Object.keys(obj).length === 0 ? true : false
        
        var objLength = Object.keys(obj).length;
    
        if (objLength) {
            return false
        }
    
        return true;
    }
    
    var test = {
        a: '1'
    };
    
    var secondTest = {};
    console.log(Object.keys(secondTest))
    
    console.log(isEmpty(test));
    console.log(isEmpty(secondTest));