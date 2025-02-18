export function showTime(timeElement) {
  const $time = document.getElementById(timeElement);

  function updateTime() {
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const time = now.toLocaleTimeString("es-ES", options);
    $time.innerHTML = time + " hs";
  }

  updateTime(); // Llama a la función de inmediato para mostrar la hora inicialmente
  setInterval(updateTime, 60000); // Actualiza la hora cada 60000 milisegundos (1 minuto)
}
