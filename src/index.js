const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

setInterval(() => {
  let diff = Date.parse("Mar 05, 2023 09:00:00") - Date.now();
  const days = Math.floor(diff / DAY);
  diff -= days * DAY;
  const hours = Math.floor(diff / HOUR);
  diff -= hours * HOUR;
  const mins = Math.floor(diff / MINUTE);
  diff -= mins * MINUTE;
  const secs = Math.floor(diff / SECOND);
  document.querySelector("#timer-container").innerHTML = `
        <div>${days}<span>days</span></div>
        <div>${hours}<span>hours</span></div>
        <div>${mins}<span>minutes</span></div>
        <div>${secs}<span>seconds</span></div>`;
}, SECOND);
