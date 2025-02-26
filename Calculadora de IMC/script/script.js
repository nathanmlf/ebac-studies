function calcularImc() {
  // Entrada de Dados
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  // Processamento

  if (isNaN(peso) || isNaN(altura)) {
    alert("Digite peso e altura!");
    return;
  }

  let valorImc = peso / (altura * altura);

  // Saída
  document.getElementById("resultadoImc").textContent = valorImc.toFixed(2);

  let classImc;

  if (valorImc < 18.5) {
    classImc = "Magreza";
  }
  if (valorImc > 18.5 && valorImc < 24.9) {
    classImc = "Normal";
  }
  if (valorImc > 25 && valorImc < 29.9) {
    classImc = "Sobrepeso";
  }
  if (valorImc > 30 && valorImc < 39.9) {
    classImc = "Obesidade";
  }
  if (valorImc > 40) {
    classImc = "Obesidade Grave";
  }
  document.getElementById("classImc").textContent = classImc;
}

function limparResultados() {
  document.getElementById("resultadoImc").textContent = "";
  document.getElementById("classImc").textContent = "";
}
