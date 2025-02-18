export function showDate(dateElement) {
  const $date = document.getElementById(dateElement);
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString("es-ES", options);

  $date.innerHTML = date;
}
