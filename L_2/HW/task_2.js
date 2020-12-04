/* 
    Построить прямоугольный треугольник состоящий из символа "*".
*/

for (i = 0; i < 50; i++) {
     for (j = 50, k = 0; j > 0 && k < 50; j--, k++) {
         if (k < i || i >= j) {
            document.write(' ');
        }
         else {
            document.write('*');
        }
          }
            document.write('</br>');
    }