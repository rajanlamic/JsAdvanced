function bindingFunction(i) {
    console.log(i);
}

// bind the function to execute later but passing the current i in each iteration
var i;
for(i=0; i<5; i++) {
    var button = document.createElement('button');
    button.appendChild(document.createTextNode('button' + i));

    button.addEventListener('click', bindingFunction.bind(null, i));

    document.body.appendChild(button);
}