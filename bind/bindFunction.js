/*
var myObj = {name: 'rajan', address:'harrow'}

console.log('myObj', myObj);
console.log('JSON.stringify(myObj)', JSON.stringify(myObj));


var myObjArr = [{name: 'rajan', address:'harrow'},
               {name: 'john', address:'camden'}]
console.log('myObj', myObjArr);
console.log('JSON.stringify(myObjArr)', JSON.stringify(myObjArr));
*/

function AnyFunction() {
  return this;
}

function AnyFunctionWithParam(a, b) {
  return 'a => ' + a + ' b => ' + b + ' par1 =>' + this.par1;
}

var anyObject = {
  par1: 'par1'
}

// Bind function
var bindFunctionToNull = AnyFunction.bind(null);

console.log('bindFunctionToNull', bindFunctionToNull);
console.log('bindFunctionToNull()', bindFunctionToNull());


var bindFunctionToWindow = AnyFunction.bind(window);
console.log('bindFunctionToWindow()', bindFunctionToWindow());

var bindFunctionToThis = AnyFunction.bind(this);
console.log('bindFunctionToThis()', bindFunctionToThis());


var bindFunctionToAnyObject = AnyFunction.bind(anyObject);
console.log('bindFunctionToAnyObject()', bindFunctionToAnyObject());


var bindFunctionToAnyObjectWithParam = AnyFunctionWithParam.bind(anyObject, 'k', 'l');
console.log('bindFunctionToAnyObjectWithParam()', bindFunctionToAnyObjectWithParam());


var bindFunctionToAnyObjectWithParamOnFunctionCall = AnyFunctionWithParam.bind(anyObject);
console.log('bindFunctionToAnyObjectWithParamOnFunctionCall()', bindFunctionToAnyObjectWithParamOnFunctionCall('a', 'b'));