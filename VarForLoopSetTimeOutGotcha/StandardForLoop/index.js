/**
 * Created by kalpana on 03/06/17.
 */

/**
 * It does not print intended result it print all 10
 *
 * @type {HTMLElement|Element}
 */
var root = document.getElementById("root");

for(var i = 0; i <10; i++) {
    setTimeout(function() {
        root.innerHTML += i + '<br>';
    }, 0)
}