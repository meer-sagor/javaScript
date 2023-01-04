// const body = document.querySelector("body");
// // const div = document.createElement("div");
// const input = document.createElement("input");
// const button = document.createElement("button");
// const ul = document.createElement('ul')

// input.setAttribute ("type", "password");
// body.appendChild(input);
// body.append(ul)
// button.innerText = "show password";
// body.appendChild(button)

// button.addEventListener('click',function(){
// // !!TODO
// // use ternariy operators
// // const type = input.getAttribute('type') === 'password' ? 'text' : 'password'
// // input.setAttribute('type', type)

//   if(input.type === "password"){
//      input.type = "text"
//      button.innerText = 'hide'
//   }else{
//     input.type = "password"
//     button.innerText = 'show password'
//   }
// })

// button.addEventListener('click', ()=>{
//   // const ul = document.createElement('ul')
//   const li = document.createElement('li')
//   li.textContent = `Insert Item`
//   ul.appendChild(li)

// })

const form = document.querySelector("form");

function submitHandler(e) {
  e.preventDefault();
  console.log(form.elements);
  // const value = form.elements["username"].value;
  // console.log("value", value);
}

form.addEventListener("submit", submitHandler);



