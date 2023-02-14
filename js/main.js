const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  // Time is set in UTC
  const date = new Date();

  const hour = date.getHours();
  const second = date.getSeconds();
  const minute = date.getMinutes();

  const secondToDegree = (second / 60) * 360 + 90;
  /* prettier-ignore*/
  const minuteToDegree = ((minute / 60) * 360) + 90;
  /* prettier-ignore*/
  const hourToDegree = ((hour / 12) * 360 ) + 90;

  secondHand.style.transform = `rotate(${secondToDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteToDegree}deg)`;
  hourHand.style.transform = `rotate(${hourToDegree}deg)`;
}

setInterval(setDate, 1000);

setDate();
