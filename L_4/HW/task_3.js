/* 
    3.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var computerChoice = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения
        компьютера.
*/

var userChoice = prompt("Что выбираете, камень, ножницы или бумагу?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "камень";
} else if(computerChoice <= 0.67) {
    computerChoice = "бумага";
} else {
    computerChoice = "ножницы";
}
document.write("<p>Вы выбрали: " + userChoice + "</p>");
document.write("<p>Компьютер выбрал: " + computerChoice + "</p><br>");
var compare = function (choice1, choice2)
{if (choice1 === choice2)
{ document.write("Ничья.");
} else if (choice1 === "камень") {
    if (choice2 === "ножницы") {
        document.write("Вы выиграли.");
    }
    else if (choice2 === "бумага") {
        document.write("Вы проиграли.");
    }
} else if (choice1 === "бумага") {
    if (choice2 === "камень") {
        document.write("Вы выиграли.");
    }
    else if (choice2 === "ножницы") {
        document.write("Вы проиграли.");
    }
} else if (choice1 === "ножницы") {
    if (choice2 === "камень") {
        document.write("Вы проиграли.");
    }
    else if (choice2 === "бумага") {
        document.write("Вы выиграли.");
    }
} else if (choice1 === "") {
    document.write("Вы ничего не выбрали! Введите камень, ножницы или бумага в поле и нажмите ОК.");
} else if (choice1 !== "камень","бумага","ножницы") {
    document.write("Нельзя выбирать предмет -> " + choice1 + ".<br> Введите камень, ножницы или бумага.");
}
}
HTMLElement.write(compare(userChoice, computerChoice));