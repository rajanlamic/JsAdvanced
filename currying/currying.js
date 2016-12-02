function CurryA(a) {
	return function(b) {
		return 'a :' + a + ' b: ' + b;
	}
}

var currA = CurryA('a');

console.log('currA', currA);

var currB = currA('b');

console.log('currB', currB);