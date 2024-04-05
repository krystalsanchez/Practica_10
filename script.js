function updateClock() {
  const now = new Date();

  // Reloj Digital
  const digitalClock = document.getElementById('digitalClock');
  digitalClock.textContent = now.toLocaleTimeString();

  // Reloj Analógico
  const hour = now.getHours() % 12;
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.querySelector('.hour');
  const minuteHand = document.querySelector('.minute');
  const secondHand = document.querySelector('.second');
  const dot = document.querySelector('.dot');

  const hourRotation = (hour * 30) + (minute / 2);
  const minuteRotation = minute * 6;
  const secondRotation = second * 6;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
  dot.style.transform = `translate(-50%, -50%)`;
}

setInterval(updateClock, 1000);
