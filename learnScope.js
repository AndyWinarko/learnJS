function outer() {
	var a = 1;

	function inner() {
		var b = 2;
		
		// we can access both 'a' and 'b' here
		console.log(a + b);
	}

	inner();
	
	// we can only access 'a' here
	console.log(a);

}

outer();
