/*
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // returns 42
console.log(eval(z));

console.log(myEval);
*/

function addMePlease(a,b) {
  return 5;
}


var myString = "my {{addMePlease}} val";

var myDataIndex = "first";
var myDataValue = "second";

//console.log(myString.replace(myDataIndex, myDataValue));


var regexp = new RegExp("{{(.*)}}", "g");

    var result =  myString.replace(regexp, function(match, p1) {
      //var evaluated = eval("express(3,4)");
     var evalueated;
      var fn = window[p1];
     // if (typeof fn === "function") {
        evalueated = fn();
      //}
      
    return evalueated;
});

console.log(result);
//console.log(express(3,4));