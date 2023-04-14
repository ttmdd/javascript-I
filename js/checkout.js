
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
	var fPhone = document.getElementById("fPhone");
	var fPassword = document.getElementById("fPassword");
	var fAddress = document.getElementById("fAddress");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorLastN = document.getElementById("errorLastN");
	var errorEmail = document.getElementById("errorEmail");  
	var errorPhone = document.getElementById("errorPhone");
	var errorPassword = document.getElementById("errorPassword");
	var errorAddress  = document.getElementById("errorAddress");
	
	// Validate fields entered by the user: name, phone, password, and email

	// first name
	if(fName.value.length <= 3 || !/^[a-zA-Z\s]*$/.test(fName.value)){
		error++;
		fName.style.border = "1px solid red";
		errorName.style.display = "block";
	} 
	
	// last name
	if(fLastN.value.length <= 3 || !/^[a-zA-Z\s]*$/.test(fLastN.value)){
		error++;
		fLastN.style.border = "1px solid red";
		errorLastN.style.display = "block";
	} 

	// phone
	if (!/^[0-9]*$/.test(fPhone.value) || fPhone.value.length !== 9) {
		error++;
		fPhone.style.border = "1px solid red";
		errorPhone.style.display = "block";
	} 
	
	// password
	if (fPassword.value.length <= 3 || !/[a-zA-Z]/.test(fPassword.value) || !/[0-9]/.test(fPassword.value)) {
		error++;
		fPassword.style.border = "1px solid red";
		errorPassword.style.display = "block";
	}

	// email
	if (fEmail.value.length <= 3 || !/[@]/.test(fEmail.value)) {
		error++;
		fEmail.style.border = "1px solid red";
		errorEmail.style.display = "block";
	}

	// address
	if (fAddress.value.length <= 3) {
		error++;
		fAddress.style.border = "1px solid red";
		errorAddress.style.display = "block";
	}
	 
	// error alert
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
