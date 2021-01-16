import isEmail from 'validator/lib/isEmail';

// how I'll use this class error in lot of places on my calls, is interest create a const with its value
const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('#form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // o this desta função é o proprio this
  hideErrorMessages(this);
  checkForEmptyFields(username, email, password, password2);
  checkForEmail(email);
  checkPasswords(password, password2);
  sendForm(this);
  if (sendForm(this)) {
    alert('Enviar formulário');
    // form.submit();
    this.submit();
  }
});

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Campo vazio');
    }
  });
};

const checkForEmail = (input: HTMLInputElement) => {
  if (!isEmail(input.value)) {
    showErrorMessage(input, 'E-mail inválido');
  }
};

const checkPasswords = (
  password: HTMLInputElement,
  password2: HTMLInputElement,
) => {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senha não confere');
    showErrorMessage(password2, 'Senha não confere');
  }
};

const hideErrorMessages = (form: HTMLFormElement) => {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formfields = input.parentElement as HTMLDivElement;
  const errorMessage = formfields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formfields.classList.add(SHOW_ERROR_MESSAGES);
};

const sendForm = (form: HTMLFormElement): boolean => {
  let shouldSend = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (shouldSend = false));
  return shouldSend;
};
