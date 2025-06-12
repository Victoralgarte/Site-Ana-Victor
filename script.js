const heartEmojis = ['❤️', '🤍'];
const sound = document.getElementById("pop-sound");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 2 + 1) + "rem";
  document.body.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
    sound.currentTime = 0;
    sound.play();
  });
}

function startHeartsWithSound() {
  let duration = 10000;
  let startTime = Date.now();
  const interval = setInterval(() => {
    if (Date.now() - startTime > duration) {
      clearInterval(interval);
      return;
    }
    createHeart();
  }, 200);
}

document.addEventListener('click', () => {
  sound.play().catch(() => {});
  startHeartsWithSound();
}, { once: true });
