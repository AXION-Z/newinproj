let score = 0;
const face = document.getElementById("face");
const scoreText = document.getElementById("score");
const sound = document.getElementById("popSound");
const reaction = document.getElementById("reaction");

const reactions = ["Ouch!", "Hey!", "Stop!", "😂", "Bruh!", "Nooo!"];

face.addEventListener("click", () => {
  score++;
  scoreText.textContent = score;

  sound.currentTime = 0;
  sound.play();

  face.classList.add("hit", "glow");
  reaction.textContent = reactions[Math.floor(Math.random() * reactions.length)];

  setTimeout(() => {
    face.classList.remove("hit", "glow");
    reaction.textContent = "";
  }, 300);
});
