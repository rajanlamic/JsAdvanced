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

// Call function
console.log('AnyFunction.call(anyObject)', AnyFunction.call(anyObject));

var callVar = AnyFunction.call(anyObject);
console.log('callVar', callVar);


console.log("AnyFunctionWithParam.call(anyObject, 'a', 'b')", AnyFunctionWithParam.call(anyObject, 'a', 'b'));