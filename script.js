document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("verificar").click();
  }
});

const numA = Math.floor(Math.random() * 100);
let lives = 8;

function verificar() {
  const numdiv = document.getElementById("numero");
  const num = document.getElementById("num").value;
  const suaResposta = document.getElementById("suaresposta");
  const atencao = document.getElementById("atencao");
  const erro = document.getElementById("erro");
  const sucesso = document.getElementById("sucesso");
  const vidas = document.getElementById("vidas");
  // document.getElementById("resposta").innerHTML = `A resposta era: ${numA}`;

  suaResposta.innerHTML = `Sua resposta é: ${num}`;
  atencao.style.display = 'none';
  erro.style.display = 'none';
  sucesso.style.display = 'none';

  if (num < 1 || num > 100) {
    suaResposta.innerHTML = "O seu número não está entre 1 e 100. <br> Digite um número de 1 a 100";
  } else {
    if (num < (numA - 10) || num > (numA + 10)) {
      erro.style.display = 'block';
      lives--;
      if (lives == 7) {
        document.getElementById("divcora8").innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else if (lives == 6) {
        document.getElementById("divcora7").innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else if (lives == 5) {
        document.getElementById("divcora6").innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else if (lives == 4) {
        document.getElementById("divcora5").innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else if (lives == 3) {
        document.getElementById("divcora4").innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else if (lives == 2) {
        document.getElementById("divcora3").innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else if (lives == 1) {
        document.getElementById("divcora2").innerHTML = '<i class="fa-regular fa-heart"></i>';
      } else if (lives == 0) {
        document.getElementById("divcora1").innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    } else if (num == numA) {
      numdiv.style.display = 'none';
      sucesso.style.display = 'block';
      sucesso.innerHTML += numA;
      document.getElementById("recarregar").style.display = 'block';
    } else if (num > (numA - 10) || num < (numA + 10)) {
      atencao.style.display = 'block';
    }
  }

  if (lives == 0) {
    window.alert("Você perdeu todas as vidas. Reiniciando o jogo.");
    numdiv.style.display = 'none';
    document.getElementById("recarregar").style.display = 'block';
    document.getElementById("resposta").innerHTML = `A resposta era: ${numA}`;
  } else {
    atualizarCorVidas();
  }
}

function atualizarCorVidas() {
  const vidasCora = document.getElementById("vidasCora");
  vidasCora.innerHTML = '';

  for (let i = 0; i < lives; i++) {
    const cor = (i < 3) ? 'blue' : 'white';
    const coracao = document.createElement("span");
    coracao.style.color = cor;
    coracao.innerHTML = '❤️';
    vidasCora.appendChild(coracao);
  }
}

atualizarCorVidas();