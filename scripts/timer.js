export function timer(displayId, increaseId, decreaseId, startId, resetId) {
  const $display = document.getElementById(displayId);
  const $increase = document.getElementById(increaseId);
  const $decrease = document.getElementById(decreaseId);
  const $start = document.getElementById(startId);
  const $reset = document.getElementById(resetId);
  const $timerContainer = document.querySelector(".timer-container");

  const INITIAL_TIME_SECONDS = 2400; // 40 minutes
  let timerDurationSeconds = INITIAL_TIME_SECONDS;
  let timerInterval;
  let isRunning = false;

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  function updateDisplay() {
    $display.textContent = formatTime(timerDurationSeconds);
  }

  updateDisplay();

  $increase.addEventListener("click", () => {
    timerDurationSeconds += 60;
    updateDisplay();
  });

  $decrease.addEventListener("click", () => {
    if (timerDurationSeconds >= 60) {
      timerDurationSeconds -= 60;
      updateDisplay();
    }
  });

  $start.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(timerInterval);
      $start.textContent = "Start";
      $timerContainer.classList.remove("blink"); // Stop blinking if paused
    } else {
      timerInterval = setInterval(() => {
        if (timerDurationSeconds > 0) {
          timerDurationSeconds--;
          updateDisplay();
        } else {
          clearInterval(timerInterval);
          isRunning = false;
          $start.textContent = "Start";
          $timerContainer.classList.add("blink"); // Start blinking

          setTimeout(() => {
            $timerContainer.classList.remove("blink"); // Stop blinking after 6s
          }, 6000);
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
    timerDurationSeconds = INITIAL_TIME_SECONDS;
    updateDisplay();
    $timerContainer.classList.remove("blink"); // Stop blinking on reset
  });
}
