function add(a) {
	return function(b) {

		return function(c) {
			if(c) {
				return (a + b + c);
			}

			return a + b;
		}


	}
}

//console.log(add(4)()); // returns function wiht parameter b return 4
console.log(add(4)(5)()); // same as before but a with a = b ie 9 return 9
console.log(add(4)(5)(6)); // repeat above 2 a with 9 + 6 14 return 14
