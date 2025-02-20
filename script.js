const currentDate = new Date();
console.log(currentDate); // реєструє поточну дату та час на консолі

const targetDate = new Date("2025-10-01T13:26:10");
console.log(targetDate);

const difference = targetDate - currentDate;
console.log(difference);

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  if (difference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "The event has started!";
    // Видаляємо анімацію, якщо час завершився
    document.getElementById("timer").classList.remove("event-approaching");
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (days <= 1) {
    document.getElementById("timer").classList.add("event-approaching");
  } else {
    // Якщо більше ніж день, видаляємо анімацію, якщо вона є
    document.getElementById("timer").classList.remove("event-approaching");
  }
}

const interval = setInterval(updateCountdown, 1000);
