const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");
const opening = document.querySelector(".opening");

openBtn.addEventListener("click", () => {
    opening.style.display = "none";
    gift.style.display = "block";
});
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
    music.play();
});
