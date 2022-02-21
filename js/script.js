let formElem = document.getElementsByTagName('form');

let emailInput = document.getElementById('email-input');

let submitBtn = document.getElementById('submit-btn');

let submitMsg = document.getElementById('submit-msg');

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = () => {
	if (emailInput.value.length === 0 || !emailInput.value.match(emailRegex)) {
		submitMsg.style.display = 'block';
		emailInput.value = '';
	} else {
		formElem[0].style.display = 'none';
		submitMsg.style.display = 'block';
		submitMsg.innerHTML = `Thanks for your email! We'll be in touch!`;
	}
};

submitBtn.addEventListener('click', validateEmail);
