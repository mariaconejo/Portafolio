const apiUrl = 'https://api.github.com/users/mariaconejo/repos?per_page=6';
const list = document.querySelector('.code-list');
const repoList = (element) => {
  element.forEach((repo) => {
    const repositorios = `
    <li class="card"><a class="link-repo" href="${repo.html_url}" target "_blank">${repo.name}</a>
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

let i = 0;
const images = ['./img/dibujo.jpg', './img/dibujo-2.png', './img/dibujo-3.jpg', './img/dibujo-4.png', './img/dibujo-5.png', './img/dibujo-6.jpg', './img/dibujo-7.jpg', './img/dibujo.jpg', './img/dibujo-8.jpg', './img/dibujo-9.png', './img/dibujo-10.jpg'];

const time = 3000;

function changePic() {
  document.slide1.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changePic(), time);
}

window.onload = changePic;
