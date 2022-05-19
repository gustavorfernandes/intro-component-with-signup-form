import { validate } from './index.js'

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('blur', (field) => {
    validate(field.target);
  })
})
