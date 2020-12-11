/* 
    4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
    Ваш ответ должен быть числом.
    "The quick brown fox jumped over the lazy dog"
*/

var str = 'The quick brown fox jumped over the lazy dog'

function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }

  console.log('Длина самого длинного слова равна: ', findLongestWord(str));