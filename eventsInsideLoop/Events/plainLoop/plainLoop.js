var i;
for(i=0; i<5; i++) {
    var button = document.createElement('button');
    button.appendChild(document.createTextNode('button' + i));
    button.addEventListener('click', function() { console.log(i)});
    document.body.appendChild(button);
}