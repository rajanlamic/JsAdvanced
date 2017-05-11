/**
 * Created by kalpana on 30/04/17.
 */

window.onload = function() {

    function GetTotal(total) {

        function add(val) {
            total += val;
            return total;
        }

        function subtract(val) {
            total -= val;
            return total;
        }

        function capturetotal() {
            return total;
        }

        return {
            capturetotal:capturetotal,
            add:add,
            subtract:subtract
        }
    }

    var getTotal = GetTotal(0);
    console.log('add 4', getTotal.add(4));
    console.log('add 5', getTotal.add(5));


    console.log('subtract 3', getTotal.subtract(3));
    console.log('add 4', getTotal.add(4));

    console.log('total', getTotal.capturetotal());

    var containerElm = document.getElementById('container');
    containerElm.innerHTML = getTotal.capturetotal();
}