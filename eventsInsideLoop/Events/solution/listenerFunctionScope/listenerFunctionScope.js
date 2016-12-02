/**
 * Created by kalpana on 01/12/16.
 */

    // create a local scope so that each button will fire its own listener handler

    // steps
    //1. while adding event listener on each loop function is executed returning a function passing local i scope
    //2. thus local function with scope is created for each button i
    // when clicking each button i such stored function i is executed

var i;
for(i=0; i<5; i++) {
    var button = document.createElement('button');
    button.appendChild(document.createTextNode('button' + i));
    button.addEventListener('click', (
        function(i) { return function() {
            console.log(i)
        }
        }
    )(i));
    document.body.appendChild(button);
}