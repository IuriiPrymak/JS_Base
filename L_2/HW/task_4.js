/* 
    Дано два числа A и B где (A<B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   
*/
var A = 3;
var B = 9;

var sum = 0;
for(var m = A; m <= B; m++)
  sum += m;
  document.write(' Число A: ' + A);
  document.write("<br/>");
  document.write(' Число B: ' + B);
  document.write("<br/>");
  document.write(' Сума чисел: ' + sum);
  document.write("<br/>");
  document.write("<br/>");

for (var j = A; j <= B; j++) {
  if (j % 2 == 0) {
    document.write("<br/>");
    }
  else {
    document.write("Нечетные числа в промежутке от A до B:" + " " + j + "<br/>");
}
}