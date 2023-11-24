let numeroAleatorio = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let tentativas = 0;
let nTentativas = document.querySelector(".tentativas");

const numerosTentados = [];
let maxTentativas = 20;
function enviarNumero() {
  let numeroPalpite = document.querySelector("#palpite").value;

  //Verificando se o numero está dentro do Padrão pedido
  if (numeroPalpite > 0 && numeroPalpite < 100) {
    tentativas += 1;
    nTentativas.innerHTML = `Número de tentativas: ${tentativas}<br> Tentativas restantes: ${
      maxTentativas - tentativas
    }`;
    numerosTentados.push(numeroPalpite);

    document.querySelector(
      ".numeros-tentados"
    ).innerHTML = `Números chutados: ${numerosTentados}`;
    document.querySelector("#palpite").value = "";
    if (tentativas < maxTentativas) {
      //Verificando acertou ou se esta proximo ao valor.
      if (numeroPalpite == numeroAleatorio) {
        document.querySelector(".resultado").classList.add("acertou");
        document.querySelector(
          ".resultado"
        ).innerHTML = `PARABÉNS VOCÊ ACERTOU O NÚMERO!<br>O NÚMERO ERA: ${numeroAleatorio}`;
        document.querySelector(".button").classList.add("desativo");
        document
          .querySelector(".button-invisivel")
          .classList.remove("desativo");
        document.querySelector(".pertoOuLonge").innerHTML = "";
      } else if (numeroPalpite > numeroAleatorio) {
        document.querySelector(".pertoOuLonge").innerHTML =
          "Número mais alto! Tente um número menor";
      } else {
        document.querySelector(".pertoOuLonge").innerHTML =
          "Número mais baixo! Tente um número maior";
      }
    } else {
      document.querySelector(".resultado").classList.add("errou");
      document.querySelector(
        ".resultado"
      ).innerHTML = `FIM DE JOGO, VOCÊ ESGOTOU AS TENTATIVAS! O NÚMERO ERA ${numeroAleatorio}`;
      document.querySelector(".button").classList.add("desativo");
      document.querySelector(".button-invisivel").classList.remove("desativo");
      document.querySelector(".pertoOuLonge").innerHTML = "";
    }
    // Mensagem de erro caso o valor não esteja dentro do padrão
  } else {
    document.querySelector("#palpite").value = "";
    window.alert("Valor inválido digite um valor entre 0 e 100!");
  }
}

function reiniciar() {
  numeroAleatorio = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  tentativas = 0;
  document.querySelector(".resultado").classList.remove("acertou");
  document.querySelector(".resultado").classList.remove("errou");
  document.querySelector(".resultado").innerHTML = "";
  nTentativas.innerHTML = ``;
  document.querySelector(".button").classList.remove("desativo");
  document.querySelector(".button-invisivel").classList.add("desativo");

  document.querySelector("#palpite").value = "";
  document.querySelector(".pertoOuLonge").innerHTML = "";
  numerosTentados.splice(0, numerosTentados.length);

  document.querySelector(".numeros-tentados").innerHTML = ``;
}
