const elements = document.getElementsByClassName('column');

for (let i = 0; i < elements.length; i++) {
  elements[i].style.flex = '25%';
}
