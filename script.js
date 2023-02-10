// https://www.pexels.com/photo/a-person-holding-a-book-10297673/

const passwordInputs = document.querySelectorAll('.pwd');
const passwordRequirements = document.querySelectorAll('.pwd-requirements ul li');
const passwordFeedback = document.querySelector('.pwd-feedback');
const submit = document.querySelector('button');



const checkMatch = () => {

    passwordFeedback.textContent = '';

    if (passwordInputs[0].value !== passwordInputs[1].value) {
        passwordFeedback.textContent = 'Password must match';
        return false;
    }
    else {
        return true;
    }
}


const checkRequirements = () => {
  
  
  Array.from(passwordRequirements).forEach(el => el.className = '');
  
  let currentInput = passwordInputs[0].value;
  console.log(currentInput);
  
  if (currentInput.match(/[A-Z]/)) {
    passwordRequirements[1].className = 'ticked';
    console.log('a....')
  }
  if (currentInput.match(/[[0-9]/)) {
    passwordRequirements[2].className = 'ticked';
  }
  if (currentInput.length >= 8) {
    passwordRequirements[0].className = 'ticked';
  }

  checkMatch()
}

passwordInputs[1].addEventListener('blur', checkMatch);
passwordInputs[0].addEventListener('blur', checkMatch);


passwordInputs[0].addEventListener('input', checkRequirements);

