// clock script start

setInterval(() => {
  let hourH = document.getElementById(`hour-h1`);
  let mintH = document.getElementById(`mint-h1`);
  let secnH = document.getElementById(`secn-h1`);
  
  let hourCir = document.getElementById(`hour-cir`);
  let mintCir = document.getElementById(`mint-cir`);
  let secnCir = document.getElementById(`secn-cir`);
  
  let hourBall = document.getElementById(`hour`);
  let mintBall = document.getElementById(`mint`);
  let secnBall = document.getElementById(`secn`);

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12) {
    h = h - 12;
  }

  h = (h < 10) ? `0` + h : h;
  m = (m < 10) ? `0` + m : m;
  s = (s < 10) ? `0` + s : s;

  hourH.textContent = h;
  mintH.textContent = m;
  secnH.textContent = s;

  hourCir.style.strokeDashoffset = 440 - (440 * h) / 12;
  mintCir.style.strokeDashoffset = 440 - (440 * m) / 60;
  secnCir.style.strokeDashoffset = 440 - (440 * s) / 60;

  hourBall.style.transform = `rotate(${h * 30}deg)`;
  // 360 / 12 = 30
  mintBall.style.transform = `rotate(${m * 6}deg)`;
  // 360 / 60 = 6
  secnBall.style.transform = `rotate(${s * 6}deg)`;
  // 360 / 60 = 6
})