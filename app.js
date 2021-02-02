const formulario = document.querySelector('#formulario');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const divAlert = document.createElement('div');
const isInvalid = document.querySelectorAll('.is-invalid');
const btnClain = document.querySelector('#btnClain');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

window.onload = () => {
  formulario.addEventListener('submit', validationForm);
  firstName.addEventListener('blur', validationInputs);
  lastName.addEventListener('blur', validationInputs);
  email.addEventListener('blur', validationInputs);
  pass.addEventListener('blur', validationInputs);
};

function validationForm(e) {
  e.preventDefault();
  if (
    firstName.value !== '' &&
    lastName.value !== '' &&
    email.value !== '' &&
    pass.value !== ''
  ) {
    formulario.reset();
  }
}

function validationInputs(e) {
  if (e.target.value.length > 0) {
    e.target.classList.remove('is-invalid');
    divAlert.remove();
  } else {
    if (!e.target.classList.contains('is-invalid')) {
      e.target.classList.add('is-invalid');
      alertDivInput(e.target, `${e.target.alt} cannot be empty `);
    }
  }

  if (e.target.type === 'email') {
    if (er.test(e.target.value)) {
      e.target.classList.remove('is-invalid');
      divAlert.remove();
    } else {
      if (!e.target.classList.contains('is-invalid')) {
        e.target.classList.add('is-invalid');
        alertDivInput(e.target, 'Look Like this is not an email');
        e.target.placeholder = 'email@example/com';
      }
    }
  }
}

function alertDivInput(element, message) {
  divAlert.classList.add('warning-message');
  divAlert.textContent = message;
  element.parentElement.appendChild(divAlert);
}
