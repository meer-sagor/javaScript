const button = document.querySelector("button");
const p = document.createElement("p");
p.innerHTML =
  "amar sonar bangal ami tomai valobshi ciro din tomar akash tomar batash amar prane";
const body = document.querySelector("body");
button.addEventListener("mouseenter", (e) => {
  body.appendChild(p);
  // button.insertAdjacentElement("beforebegin", p);
  body.style.backgroundColor = "red";
  p.style.display='block'
});

button.addEventListener("mouseleave", () => {
  body.style.backgroundColor = "";
  const p = document.querySelector("p");
  p.style.display='none'
});
