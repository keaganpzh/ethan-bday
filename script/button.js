const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

startTimer();

document.getElementById("start").onclick = function () {
    location.href = "pages/main.html"
}

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTime(timeLeft)}
  </span>
</div>
`;

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (seconds <= 0) {
      seconds = `00`;
    }
    return `${minutes}:${seconds}`;
  }

function startTimer() {
    timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
  }, 1000);
}