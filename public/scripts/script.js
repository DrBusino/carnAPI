let eventsDias = [];


const linhaDoTempo = document.querySelector('#linhaDoTempo');
const btnPlay = document.querySelector('#btnPlay');

btnPlay.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  linhaDoTempo.appendChild(newDiv)
  newDiv.id = "div1";
  newDiv.textContent= "teste";
}); 

console.log('teste');