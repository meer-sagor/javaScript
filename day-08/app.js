function $(selectorName) {
  return document.querySelector(`${selectorName}`);
}
// const parent = $(".parent");
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.children[1].innerText);
// parent.parentElement.className = ''
// for (const key in parent.children) {
//     const element = parent.children[key];
//     console.log(element.innerText);
// }
// console.dir(parent.parentElement);

// !!TODO
// Manipulate

function $$(elementName) {
  return document.createElement(`${elementName}`);
}

const div = $$('div')
const parentElement =$('.parent')
const body = $('body')

const ul = $$('ul')
const li  = $$('li')
div.append(ul)

body.appendChild(div)
div.insertAdjacentElement('beforebegin',li)
// div.before(li)
console.log(parentElement);




//  !!TODO
// Attribute
const input = $('input')
input.setAttribute('type', 'text')
input.setAttribute('value', '51245')

if(input.hasAttribute('name')){
    console.log(input.getAttribute('name'));
}else{
    input.setAttribute('name', 'meer')
}

inputNaNpxoveAttribute('name')

console.log(input);

