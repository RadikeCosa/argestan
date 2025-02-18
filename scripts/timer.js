export function timer(displayId, increaseId, decreaseId, startId, resetId) {
  const $display = document.getElementById(displayId);
  const $increase = document.getElementById(increaseId);
  const $decrease = document.getElementById(decreaseId);
  const $start = document.getElementById(startId);
  const $reset = document.getElementById(resetId);
  const $timerContainer = document.querySelector(".timer-container"); // Obtén el contenedor del timer

  let startTime = 10; // Tiempo inicial en segundos (40 minutos)
  let timerInterval;
  let isRunning = false;

  function updateDisplay() {
    const minutes = Math.floor(startTime / 60);
    const seconds = startTime % 60;
    $display.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  updateDisplay(); // Mostrar el tiempo inicial al cargar la página

  $increase.addEventListener("click", () => {
    startTime += 60;
    updateDisplay();
  });

  $decrease.addEventListener("click", () => {
    if (startTime >= 60) {
      startTime -= 60;
      updateDisplay();
    }
  });

  $start.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(timerInterval);
      $start.textContent = "Start";
    } else {
      timerInterval = setInterval(() => {
        if (startTime > 0) {
          startTime--;
          updateDisplay();
        } else {
          clearInterval(timerInterval);
          isRunning = false;
          $start.textContent = "Start";

          // Alarma visual: parpadeo del fondo
          $timerContainer.classList.add("blink");

          setTimeout(() => {
            $timerContainer.classList.remove("blink");
          }, 6000); // Parpadea durante 6 segundos
        }
      }, 1000);
      $start.textContent = "Pause";
    }
    isRunning = !isRunning;
  });

  $reset.addEventListener("click", () => {
    clearInterval(timerInterval);
    isRunning = false;
    $start.textContent = "Start";
    startTime = 40 * 60; // Restablecer a 40 minutos
    updateDisplay();
  });
}
