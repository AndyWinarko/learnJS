function user() {
	var username, password;

	function doLogin(user, pw) {
		username = user;
		password = pw; 
	}

	function showUsername() {
		console.log(username);
	}

	var publicAPI = {
		login : doLogin,
		show : showUsername
	};

	return publicAPI;
}

var fred = user();

fred.login("andy", "letme1n");
fred.show();
