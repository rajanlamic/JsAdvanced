
window.onload = function() {

    var a = 10;
    var b = 20;

    var c =  eval(a + b);

    var containerElm = document.getElementById('container');
    containerElm.innerHTML = c;
}