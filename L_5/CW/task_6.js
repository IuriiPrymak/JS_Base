
/* 
    6. Напишите функцию, которая принимает один аргумент - количество кофейных зерен.
        По условию - из 5 кофейных зерен можно сделать 1 чашку кофе.
        Если зерен на чашку кофе не хватает - попросите у пользователя еще.
        Верните количество чашек с кофе, которые можно сделать из того кол-ва зерен, что у вас уже имеется.
        Те зерна, которые остались должны быть учтены при следующей готовке
        
        Например:
        doCoffee(10)  return 2;  осталось зерен: 0
        doCoffee(4)    попросить еще зерна (например, 3)  return 1, осталось зерен: 2
        doCoffee(3)    return 1;
*/

var cups = 0;
var beansLeft = 0;

var coffeCups = document.querySelector('.cofee_cups span');
var makeACoffee = document.querySelector('.makeCoffee');

makeACoffee.addEventListener('click', function() {
    coffeCups.innerText = doCoffee(beansLeft);
})

function doCoffee(beans) {    
    while (beans < 5) {
        beans += +prompt('please give more coffee beans' + ((beans == 0) ? '' : ' | beans left: ' + beans ));    
        if (isNaN(beans)) break;     
    }    

    cups += Math.floor(beans / 5);
    beansLeft = beans % 5;

    console.log('beans left: ' + beansLeft);

    return cups;
}