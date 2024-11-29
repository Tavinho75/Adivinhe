const numA = Math.floor(Math.random() * 100);
let lives = 8;

function verificar() {
  const num = document.getElementById("num").value;
  const suaResposta = document.getElementById("suaresposta");
  const atencao = document.getElementById("atencao");
  const erro = document.getElementById("erro");
  const sucesso = document.getElementById("sucesso");
  const vidas = document.getElementById("vidas");

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
      vidas.innerHTML = lives;
    } else if (num == numA) {
      sucesso.style.display = 'block';
      sucesso.innerHTML += numA;
      document.getElementById("recarregar").style.display = 'block';
    } else if (num > (numA - 10) || num < (numA + 10)) {
      atencao.style.display = 'block';
    }
  }

  if (lives == 0) {
    alert("Você perdeu todas as vidas. Reinicie o jogo.");
    document.getElementById("recarregar").style.display = 'block';
  }
}