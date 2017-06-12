/**
 * Created by kalpana on 03/06/17.
 */

 /**
    Immediately Invoked Functional Execution
 **/

 var  bindingFunction = function(i){
    root.innerHTML += i + '<br>';
}

var root = document.getElementById("root");
for(var i = 0; i <10; i++) {
    setTimeout(bindingFunction.bind(null, i), 0);
}