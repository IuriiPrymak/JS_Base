/* 
        1. Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). 
        Вернуть усеченную строку с ... окончанием.

        function truncateString(str, num) {
        // Clear out that junk in your trunk
        return str;
        }

        truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num > str.length) {
        return str;
    }   

    return str.slice(0, num) + '...';  
    
    // return num > str.length ? str : str.slice(0, num) + '...';
}

var testString = "A-tisket a-tasket A green and yellow basket";

console.log(truncateString(testString, 8));