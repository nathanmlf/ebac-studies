function calcular() {
  const titulo = document.getElementById("titulo").value;
  const duracao = document.getElementById("duracao").value;

  const horas = Math.floor(duracao / 60);
  const minutos = duracao - horas * 60;

  document.getElementById("tituloSaida").textContent = titulo.toUpperCase();

  document.getElementById("duracaoSaida").textContent =
    horas + " hora(s) e " + minutos + " minuto(s)";
}
