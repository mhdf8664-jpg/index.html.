const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");
const welcome = document.querySelector(".welcome");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
    welcome.style.display = "none";
    gift.style.display = "block";

    if (music) {
        music.play();
    }
});
