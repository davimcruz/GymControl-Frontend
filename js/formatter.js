function formatCPF(input) {
  let cpf = input.value.replace(/\D/g, "");

  if (cpf.length > 11) {
    cpf = cpf.slice(0, 11);
  }

  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  input.value = cpf;
}

document.addEventListener("input", function (e) {
  if (e.target.matches(".cpf-input")) {
    e.target.value = e.target.value.replace(/[^0-9.-]/g, "");
  }
});

function formatarData(input) {
  let inputValue = input.value.replace(/\D/g, "");

  if (inputValue.length > 8) {
    inputValue = inputValue.slice(0, 8);
  }

  if (inputValue.length >= 2) {
    inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2);
  }
  if (inputValue.length >= 5) {
    inputValue = inputValue.slice(0, 5) + "/" + inputValue.slice(5);
  }

  input.value = inputValue;

  const dataNascimento = new Date(input.value);
  if (isNaN(dataNascimento)) {
    return;
  }

  const hoje = new Date();
  const idade = hoje.getFullYear() - dataNascimento.getFullYear();

  const warn18 = document.getElementById("warn-18");
  const warn80 = document.getElementById("warn-80");

  if (idade < 18) {
    warn18.style.display = "block";
    warn80.style.display = "none";
  } else if (idade > 80) {
    warn18.style.display = "none";
    warn80.style.display = "block";
  } else {
    warn18.style.display = "none";
    warn80.style.display = "none";
  }
}

const inputDataNascimento = document.querySelector(
  '.form-control[data-input="data-nascimento"]'
);

inputDataNascimento.addEventListener("input", function (e) {
  formatarData(e.target);
});
