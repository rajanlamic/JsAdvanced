/**
 * Created by kalpana on 03/06/17.
 */

 /**
    Immediately Invoked Functional Execution
 **/

var root = document.getElementById("root");

for(let i = 0; i <10; i++) {

        setTimeout(function() {
            root.innerHTML += i + '<br>';
        }, 0);


}