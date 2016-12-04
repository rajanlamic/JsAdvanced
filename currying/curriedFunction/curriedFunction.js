function curriedFunction(fn) {
	var argumentList = Array.prototype.slice.call(arguments, 1);
	return fn.apply(null, argumentList);
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

console.log('adds(2, 3)', curriedFunction(add, 2, 3));
console.log('subtract(2, 3)', curriedFunction(subtract, 3, 2));



function greet(greeting) {
	return function (name) {
		console.log(greeting + ' -- ' + name);
	}
}

var greetFun = greet('hello');
greetFun('rajan');
greetFun('kalpana');


function CurryPartial(fn) {
	var argumentList = Array.prototype.slice.call(arguments, 1);
	return function() {
		return fn.apply(this, arguments);
	}
}

console.log('CurryPartial(add)(2, 3)', CurryPartial(add)(2, 3));
console.log('CurryPartial(subtract)(3, 2)', CurryPartial(subtract)(3, 2));
