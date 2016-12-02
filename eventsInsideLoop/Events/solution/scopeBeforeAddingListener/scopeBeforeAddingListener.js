/**
 * Created by kalpana on 01/12/16.
 */

    // create and execute local function while adding event listener so local scope is maintained for each button

    //steps
    // 1. function is execute as soon as code is execure
    //2. function runs five times with local scope i for each button i
    // while clicking buttoni listener i is executed separately

var i;
for(i=0; i<5; i++) {
    var button = document.createElement('button');
    button.appendChild(document.createTextNode('button' + i));
    (function(i) {
        button.addEventListener('click', function() { console.log(i) });
    })(i);
    document.body.appendChild(button);
}