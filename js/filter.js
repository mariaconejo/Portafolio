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
