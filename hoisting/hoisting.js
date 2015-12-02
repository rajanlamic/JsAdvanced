var foo = 1;
function bar() {
    alert('foo ' + foo); // undefined
	if (!foo) {
		var foo = 10;
	}
	alert(foo); // 10
}
bar();