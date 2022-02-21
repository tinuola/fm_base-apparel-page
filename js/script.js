let formElem = document.getElementsByTagName('form');

let emailInput = document.getElementById('email-input');

let submitBtn = document.getElementById('submit-btn');

let submitMsg = document.getElementById('submit-msg');

const sayHello = () => {
	if (emailInput.value.length === 0) {
		submitMsg.style.display = 'block';
	} else {
		formElem[0].style.display = 'none';
		submitMsg.style.display = 'block';
		submitMsg.innerHTML = `Thanks for your email! We'll be in touch!`;
	}
};

submitBtn.addEventListener('click', sayHello);
