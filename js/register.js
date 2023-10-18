const codeInput = document.getElementById("code-input");
const codeText = document.getElementById("code-text");
const pontuacaoInput = document.getElementById("pontuacao-input");
const registrarDiariaBtn = document.getElementById("view-btn");

let diariaRegistrada = false;

registrarDiariaBtn.addEventListener("click", () => {
  if (!diariaRegistrada) {
    const valorCodigo = codeInput.value;

    if (valorCodigo === "ABCD1234") {
      let valorAtual = parseInt(pontuacaoInput.placeholder, 10);

      if (!isNaN(valorAtual)) {
        valorAtual += 1;

        pontuacaoInput.placeholder = `${valorAtual} Pontos Acumulados`;
      }

      diariaRegistrada = true;

      codeText.style.display = "none";
      codeInput.style.display = "none";

      registrarDiariaBtn.style.display = "none";
    }
  }
});
