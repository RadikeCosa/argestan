import { showTime } from "./showTime.js";
import { showDate } from "./showDate.js";
import { timer } from "./timer.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  showDate("date");
  showTime("time");
  timer("display", "increase", "decrease", "start", "reset");
});
