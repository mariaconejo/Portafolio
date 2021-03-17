const apiUrl = 'https://api.github.com/users/mariaconejo/repos?per_page=6';
const list = document.querySelector('.code__list');
const repoList = (element) => {
  element.forEach((repo) => {
    const repositorios = `
    <li class="card"><a class="link__repo" href="${repo.html_url}" target "_blank">${repo.name}</a>
        <p>Create:${repo.created_at}</p>
    </li>
    `;
    list.innerHTML += repositorios;
  });
};

fetch(apiUrl, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((data) => {
    repoList(data);
  })
  .catch((err) => console.error(err));

// Filtro

const categorias = document.querySelectorAll('#categories .categorie');
const contenedorTrabajos = document.querySelectorAll('.works__conteiner');
let categoriaActiva = null;

categorias.forEach((categoria) => {
  categoria.addEventListener('click', (e) => {
    categorias.forEach((elemento) => {
      elemento.classList.remove('active');
    });
    e.currentTarget.classList.toggle('active');
    categoriaActiva = categoria.dataset.categoria;
    contenedorTrabajos.forEach((contenedor) => {
      if (contenedor.dataset.categoria === categoriaActiva) {
        contenedor.classList.add('activo');
      } else {
        contenedor.classList.remove('activo');
      }
    });
  });
});

// Galeria
const elements = document.getElementsByClassName('column');

for (let i = 0; i < elements.length; i++) {
  elements[i].style.flex = '25%';
}

// Formulario

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
      h3.innerHTML = alertError;
    } else {
      element.classList.remove('js__warning');
      alertError = '';
      alertValido = 'Su formulario fue enviado';
      msj.innerHTML = alertValido;
      msj.classList.add('js__validation');
    }
  });
  event.target.reset();
});

// Switch

const ligthMode = document.querySelector('input');

ligthMode.addEventListener('click', (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle('dark-mode');
});
