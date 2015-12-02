/*
var myObj = {name: 'rajan', address:'harrow'}

console.log('myObj', myObj);
console.log('JSON.stringify(myObj)', JSON.stringify(myObj));


var myObjArr = [{name: 'rajan', address:'harrow'},
               {name: 'john', address:'camden'}]
console.log('myObj', myObjArr);
console.log('JSON.stringify(myObjArr)', JSON.stringify(myObjArr));
*/

function getMe(ins) {
  return 'getMe ' + this.what + ' - ' + ins;
}

var rachel = {name:'Rachel Green', total:500};

function outerFunction(what) {
  this.what = what;
  this.getYou = function() {
    return 'getYou' + what;
  }
}



var outerObj = new outerFunction('what');

getMeFunc = getMe.bind(outerObj, 'outs');

//console.log(outerObj.getYou());
console.log(getMeFunc());

