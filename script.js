const fechaInicio = new Date(2025, 2, 1, 0, 0, 0);

const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  let diferencia = ahora - fechaInicio;

  const segundosTotales = Math.floor(diferencia / 1000);
  const dias = Math.floor(segundosTotales / (60 * 60 * 24));
  const horas = Math.floor((segundosTotales % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundosTotales % (60 * 60)) / 60);
  const segundos = segundosTotales % 60;

  contador.innerText = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos 💖`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
