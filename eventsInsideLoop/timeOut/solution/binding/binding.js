function bindingFunction(i) {
    console.log(i);
}

// bind the function to execute later by passing the current scope in each iteration

var i;
for(i=0; i<5; i++) {
    setTimeout(bindingFunction.bind(null, i), i);
}