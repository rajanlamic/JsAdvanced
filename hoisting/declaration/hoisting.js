var foo = 1;
function bar() {
    console.log('foo ' + foo);
	if (!foo) {
		foo = 10;
	}
	console.log(foo);
}
bar();