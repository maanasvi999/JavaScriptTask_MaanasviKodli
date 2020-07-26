<script type="text/javascript" src="validation.js"> </script>


const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', event => {
	event.preventDefault();
	checkall();

});

function checkall() {

	const emailVal = email.value.trim();
	const passwordVal = password.value.trim();

	if(emailVal === '') {
		setError(email, 'Email cannot be blank');
	} else if (!checkEmail(emailValue)) {
		setError(email, 'Not a valid email');
	} else {
		setSuccess(email);
	}

	if(passwordVal === '') {
		setError(password, 'Password cannot be blank');
	} else {
		setSuccess(password);
	}

}


function setError(inputData, message) {

	const controlelem = inputData.parentElement;
	const small = formControl.querySelector('small');
	controlelem.className = 'form-control error';
	small.innerText = message;
}


function setSuccess(inputData) {

	const controlelem = inputData.parentElement;
	controlelem.className = 'form-control success';
}


function checkEmail(email) {

	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}