const form = document.querySelector('form');
const input = document.querySelectorAll('.required');
const h3 = document.querySelector('h3');
const msj = document.querySelector('form p');
let alertError = '';
let alertValido = '';
msj.innerHTML = '';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.forEach((element) => {
    if (element.value === '') {
      element.classList.add('js__warning');
      alertError = 'Ocurrio un error,por favor llenar los campos resaltados';
      alertValido = '';
      h3.innerText = alertError;
    } else {
      element.classList.remove('js__warning');
      alertError = '';
      alertValido = 'Su formulario fue enviado';
      msj.innerText = alertValido;
      msj.classList.add('js__validation');
    }
  });
  event.target.reset();
});
