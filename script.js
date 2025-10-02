// PRONTOS + TRAVA-LÍNGUAS
let prendas = [
  "Imitar um robô travando 🤖",
  "Falar rápido: 'if, else, else if, else if' 👅",
  "Andar como pinguim com bug 🐧",
  "Falar trava-língua: 'O rato roeu a roupa do rei de Roma' 👅",
  "Falar trava-língua: 'Três pratos de trigo para três tigres tristes' 👅",
  "Explicar o que é Wi-Fi de forma simples 📶",
  "Responder: Para que serve o mouse? 🖱️",
  "Falar rápido: Bit, Byte, Back-end, Browser 👅",
  "Trava-língua: Se o código compila quando complica, complica mais quando não compila 💻",
  "Trava-língua: Cache cheio chama caos no código 🗂️",
  "Trava-língua: Programador programa programas em Python, Java programa programador 🐍",
  "Pule de um pé só",
  "Quem descobriu a América?",
  "Quem é o criador do Facebook?",
  "Diga o nome do dono da Apple."
  
];

let recompensas = [
  "🍬 Bombom", 
  "🍭 Pirulito"
];

const pageIntro = document.getElementById("page-intro");
const pageChoice = document.getElementById("page-choice");
const pageResult = document.getElementById("page-result");
const resultDiv = document.getElementById("result");

document.getElementById("startBtn").addEventListener("click", () => {
  pageIntro.classList.remove("active");
  pageChoice.classList.add("active");
});

document.getElementById("blueBtn").addEventListener("click", play);
document.getElementById("redBtn").addEventListener("click", play);
document.getElementById("nextBtn").addEventListener("click", () => {
  pageResult.classList.remove("active");
  pageChoice.classList.add("active");
});

function play() {
  const isReward = Math.random() < 0.5;
  let msg = "";
  if(isReward) {
    msg = "🎁 Recompensa: " + recompensas[Math.floor(Math.random()*recompensas.length)];
    document.getElementById("soundReward").play();
  } else {
    msg = "🟥 Prenda: " + prendas[Math.floor(Math.random()*prendas.length)];
    document.getElementById("soundPrenda").play();
  }
  resultDiv.innerHTML = msg;
  createConfetti();
  pageChoice.classList.remove("active");
  pageResult.classList.add("active");
}

function createConfetti(){
  for(let i=0;i<50;i++){
    const c=document.createElement("div");
    c.classList.add("confetti");
    c.style.left=Math.random()*window.innerWidth+"px";
    c.style.backgroundColor=`hsl(${Math.random()*360},100%,50%)`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}