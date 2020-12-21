/* 
        3. Проверьте, классифицировано ли значение как логический примитив. Верните true или false.

        Булевы примитивы истинны и ложны.

        function booWho(bool) {
        return bool;
        }

        booWho(null);     
*/

function booWho(bool) {
        // if (typeof bool === 'boolean') {
        //     return true
        // }
        return Boolean(bool);
    }
    
    console.log(booWho(null));  