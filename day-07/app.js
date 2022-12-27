const body = document.querySelector("body");
const div = document.createElement("div");
const h1 = document.createElement("h1");

const button = document.createElement('button')

const image = document.createElement('img')
image.src = 'sr'
image.alt = 'al'
image.classList.add('imag', 'adf')

image.classList.remove('adf')
div.appendChild(image)



body.appendChild(div);

h1.innerText = htmlElement;
div.appendChild(h1);

