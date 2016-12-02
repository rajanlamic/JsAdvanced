
var i;
for(i=0; i<5; i++) {
// function executing for each iteration with local scope i

    (function(i) {
        setTimeout(function() {
            console.log(i);}, i)
    })(i);

}