
var i;
for(i=0; i<5; i++) {

    // for each settimeout function execution function is returned with local scope i which will be executed after i milisecons

    setTimeout((function(i) {
        return function() {
        console.log(i); }
    })(i), i);

}