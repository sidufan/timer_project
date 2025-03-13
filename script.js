// Отримуємо елементи один раз, а не на кожному оновленні
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const timerElement = document.getElementById("timer");

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  if (difference < 0) {
    clearInterval(interval);
    timerElement.innerText = "The event has started!";
    timerElement.classList.remove("event-approaching");
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;

  timerElement.classList.toggle("event-approaching", days <= 1);
}

const interval = setInterval(updateCountdown, 1000);
