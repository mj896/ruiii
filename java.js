onload = () => {
    // Remove the "not-loaded" class after 1 second
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // Play background music
    const music = document.getElementById("bg-music");
    if (music) {
        music.play().catch(() => {
            console.log("Autoplay blocked. Click anywhere to play music.");
            document.addEventListener("click", () => {
                music.play();
            }, { once: true });
        });
    }
};
