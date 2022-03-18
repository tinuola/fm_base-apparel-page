let formElem = document.getElementsByTagName('form');

let emailInput = document.getElementById('email-input');

let errorIcon = document.getElementById('error-icon');

let submitBtn = document.getElementById('submit-btn');

let submitMsg = document.getElementById('submit-msg');

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = () => {
  if (emailInput.value.length === 0 || !emailInput.value.match(emailRegex)) {
    errorIcon.style.display = 'inline';
    submitMsg.innerHTML = `Please provide a valid email.`;
    emailInput.value = '';
  } else {
    formElem[0].style.display = 'none';
    submitMsg.style.textAlign = 'left';
    submitMsg.innerHTML = `Thanks for your email! We'll be in touch!`;
  }
};

const clearErrorIcon = () => {
  if (emailInput.value.length > 0) {
    errorIcon.style.display = 'none';
  }
};

submitBtn.addEventListener('click', validateEmail);

emailInput.addEventListener('keyup', clearErrorIcon);
