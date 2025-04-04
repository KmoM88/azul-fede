// Fecha de inicio de relación (formato: Año, Mes-1, Día)
const fechaInicio = new Date(2022, 1, 14); // 14 de febrero de 2022 (mes 1 = febrero)
const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = ahora.getHours();
  const minutos = ahora.get
