document.getElementById("celebrateButton").addEventListener("click", () => {
    const sound = document.getElementById("fireworksSound");
    if (sound) {
        sound.currentTime = 0; // Restart the sound
        sound.play(); // Play the sound
    }

    // Fireworks animation logic
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    createFireworks(x, y);

    // Multiple Random Fireworks
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            createFireworks(x, y);
        }, i * 500);
    }
});
