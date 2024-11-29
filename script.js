const numA = Math.floor(Math.random() * 100);

function verificar() {
  const num = document.getElementById("num").value;
  const suaresposta = document.getElementById("suaresposta");
  const atencao = document.getElementById("atencao");
  const erro = document.getElementById("erro");
  const sucesso = document.getElementById("sucesso");
  suaresposta.innerHTML = "";
  suaresposta.innerHTML = "Sua resposta é: ";
  suaresposta.innerHTML += num;
  atencao.style.display = 'none';
  erro.style.display = 'none';
  erro.innerHTML = "Você errou.";
  sucesso.style.display = 'none';
  sucesso.innerHTML = "Parabéns! Você acertou. A resposta é: ";

  if (num < (numA - 10) || num > (numA + 10)) {
    erro.style.display = 'block';
  } else if (num == numA) {
    sucesso.style.display = 'block';
    sucesso.innerHTML += numA;
  } else if (num > (numA - 10) || num < (numA + 10)) {
    atencao.style.display = 'block';
  }
}