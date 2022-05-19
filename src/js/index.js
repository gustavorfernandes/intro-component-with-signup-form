export function validate(input) {
  const inputType = input.dataset.type;
  const inputfield = input.parentElement.querySelector('.input');
  const inputIcon = input.parentElement.querySelector('.input__icon');
  const inputSpam = input.parentElement.querySelector('.input__span');

  if (input.validity.valid) {
    inputfield.classList.remove('input-error');
    inputIcon.classList.remove('input-error__icon');
    inputSpam.classList.remove('input-error__span');
    inputSpam.innerHTML = '';
  } else {
    inputfield.classList.add('input-error');
    inputIcon.classList.add('input-error__icon');
    inputSpam.classList.add('input-error__span');
    inputSpam.innerHTML = showErrorMessage(inputType, input);
  }
}

const errorTypes = [
  'valueMissing',
  'typeMismatch'
]

const errorMessages = {
  firstName: {
    valueMissing: 'First Name cannot be empty'
  },
  lastName: {
    valueMissing: 'Last Name cannot be empty'
  },
  email: {
    valueMissing: 'Email cannot be empty',
    typeMismatch: 'Looks like this is not an email'
  },
  password: {
    valueMissing: 'Password cannot be empty'
  }
}

function showErrorMessage(inputType, input) {
  let message = '';
  const inputfield = input.parentElement.querySelector('.input');

  errorTypes.forEach(error => {
    
    if (input.validity[error]) {
      message = errorMessages[inputType][error];
      inputfield.placeholder = '';
    }

    if (message === 'Looks like this is not an email') {      
      inputfield.value = '';
      inputfield.classList.add('placeholder-red');
      inputfield.placeholder = 'email@example.com';
    }
  })

  return message;
}
